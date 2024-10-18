const User = require('../models/User');
const Thread = require('../models/Thread');
const Chat = require('../models/Chat');
const Contract = require('../models/Contract');
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const chatController = {};

chatController.onlineOrOffline = async (req) => {
    const { socket_id, is_online, sender_id } = req;
    try {
        if (is_online == 1) {
            const result = await User.findOneAndUpdate({ _id: sender_id }, { socket_id: socket_id, is_online: is_online });
            return { status: true, message: 'User is online', data: result };
        }
        else {
            const result = await User.findOneAndUpdate({ socket_id: socket_id }, { socket_id: '', is_online: is_online });
            return { status: true, message: 'User is offline', data: result };
        }
    } catch (error) {
        return { status: false, message: 'error ' + error };
    }
}

chatController.roomCreate = async (req) => {
    try {
        let query = {
            ticket_type: req.ticket_type,
            ticket_id: req.ticket_id,
            type: req.type || 'SINGLE',
            user_id: [req.sender_id, req.receiver_id]
        };
        populate = {};

        let thread = await Thread.findOne(query);

        if (!thread) {
            thread = new Thread({
                type: req.type || 'SINGLE',
                group_name: req.group_name || '',
                ticket_type: req.ticket_type || 'Event',
                ticket_id: req.ticket_id || 0,
                last_message: '',
                user_id: [req.sender_id, req.receiver_id]
            });
            await thread.save();
        }
        /*
        let chatUserFrom = await ThreadUser.findOne({ thread_id: thread.id, user_id: req.sender_id });
        if (!chatUserFrom) {
            chatUserFrom = new ThreadUser({
                thread_id: thread.id,
                user_id: req.sender_id
            });
            await chatUserFrom.save();
        }

        let chatUserTo = await ThreadUser.findOne({ thread_id: thread.id, user_id: req.receiver_id });
        if (!chatUserTo) {
            chatUserTo = new ThreadUser({
                thread_id: thread.id,
                user_id: req.receiver_id
            });
            await chatUserTo.save();
        }*/
        return { status: true, message: 'room is created', data: thread.id };
    } catch (error) {
        return { status: false, message: 'error ' + error };
    }
}

chatController.threadList = async (req) => {
    try {
        const user_id = req.sender_id;
        const search = req.search;
        var limit = 0;
        var offset = 0;
        var page = 1;

        if (typeof req.page !== "undefined") {
            if (req.page != "") {
                page = req.page;
            }
        }
        if (typeof req.limit !== "undefined") {
            if (req.limit != "") {
                limit = req.limit;
            }
        }
        offset = (page - 1) * limit;

        var userId = new ObjectId(user_id);
        var query = { user_id: { $in: [userId] } };
        if (typeof search !== "undefined" && search != "") {
            query.$or = [
                { $expr: { $regexMatch: { input: { $concat: [{ $arrayElemAt: ["$user.first_name", 0] }, " ", { $arrayElemAt: ["$user.last_name", 0] }] }, regex: search, options: "i" } } }
            ];
        }



        let result = await Thread.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $match: query
            },
            {
                $project: {
                    _id: 1,
                    ticket_id: 1,
                    ticket_type: 1,
                    type: 1,
                    last_message: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    'user._id': 1,
                    'user.image': 1,
                    'user.first_name': 1,
                    'user.last_name': 1,
                }
            },
            {
                $skip: Number(offset)
            },
            {
                $limit: Number(limit)
            }
        ]);


        for (let i = 0; i < result.length; i++) {
            const chatCount = await Chat.find({ receiver_id: user_id, is_read: { $nin: [user_id] }, thread_id: result[i]._id }).count();
            // result[i] = result[i].toObject();
            result[i].count = chatCount;
        }
        if (result.length > 0) {
            return { status: true, message: 'Thread List get successfully..', data: result };
        }
        else {
            return { status: false, message: 'Thread List get successfully.', data: null };
        }

    } catch (error) {
        return { status: false, message: 'error ' + error };
    }
}

chatController.chatList = async (req) => {
    try {
        const user_id = req.sender_id;
        const search = req.search;

        var limit = req.limit ? req.limit : 10;
        var offset = 0;
        var page = req.page ? req.page : 1;

        offset = (page - 1) * limit;
        const query = { thread_id: req.room_id };
        const result = await Chat.find(query)
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .skip(Number(offset))
            .populate({ path: 'sender_id', select: 'first_name last_name image' })
            .populate({ path: 'receiver_id', select: 'first_name last_name image' });

        const list = await Thread.findOne({ _id: req.room_id });

        const chatLimit = await Contract.findOne({
            user_id: { $in: list?.user_id },
            tenant_id: { $in: list?.user_id },
            status: { $in: ["Accepted", "Completed", "Break"] }
        });

        let total = await Chat.find(query).count();
        if (result.length > 0) {
            return {
                status: true,
                message: 'Chat List get successfully',
                data: result,
                total_record: total,
                unlimitedChat: (chatLimit) ? true : false,
                limit: limit
            };
        }
        else {
            return {
                status: false,
                message: 'Chat not found',
                data: null,
                total_record: total,
                limit: limit
            };
        }

    } catch (error) {
        return { status: false, message: 'error ' + error };
    }
}

chatController.sendMessage = async (req) => {
    try {
        var input = {
            thread_id: req.room_id,
            sender_id: req.sender_id,
            receiver_id: req.receiver_id,
            message: req.message,
            attechment_type: req.type
        }

        if (req.attechment) {
            input.attechment = req.attechment
        }

        const chat = new Chat(input);
        await chat.save();

        //--------sending push notification-------//
        var senderUser = await User.findById(req.sender_id).select('first_name last_name image device_token');
        var receiverUser = await User.findById(req.receiver_id).select('first_name last_name image device_token');
        var arr = {
            receiver_id: req.receiver_id,
            sender_id: req.sender_id,
            type: "CHAT",
            type_id: "",
            title: senderUser.first_name + " " + senderUser.last_name + " : " + req.message,
            message: req.message,
        };
        await FUNC.pushNotification(arr, receiverUser.device_token);
        //------push notification ---------------//

        await Thread.findOneAndUpdate({ _id: req.room_id }, { last_message: req.message, updatedAt: new Date() });

        const result = await Chat.findOne({ _id: chat.id })
            .populate({ path: 'sender_id', select: 'first_name last_name image' })
            .populate({ path: 'receiver_id', select: 'first_name last_name image' });
        return { status: true, message: 'message send successfully', data: result };

    } catch (error) {
        return { status: false, message: 'error ' + error };
    }
}

chatController.readMessage = async (req) => {
    const { room_id, sender_id, type, message_id } = req;
    if (type == 'ALL') {
        const chat = await Chat.find({ thread_id: room_id, is_read: { $nin: [sender_id] } })

        if (chat) {
            for (const chats of chat) {
                if (chats) {
                    chats.is_read.push(sender_id);
                    await chats.save();
                }
            }
        }

        return { status: true, message: 'Read all successfully', data: chat };
    }
    else {
        const chat = await Chat.find({ _id: message_id, is_read: { $nin: [sender_id] } })
        if (chat) {
            chat.is_read.push(sender_id);
            await chat.save();
            return { status: true, message: 'Read successfully', data: chat };
        }
        else {
            return { status: false, message: 'Already Read successfully', data: null };
        }
    }
}

chatController.deleteMessage = async (req) => {
    const { room_id, sender_id, type, message_id } = req;
    if (type == 'ALL') {
        const chat = await Chat.deleteMany({ thread_id: room_id })
        if (chat) {
            return { status: true, message: 'Delete all successfully', data: chat };
        } else {
            return { status: true, message: 'Already Deleted all chat', data: [] };
        }
    }
    else {
        const chat = await Chat.deleteOne({ _id: message_id })
        if (chat) {
            return { status: true, message: 'Deleted successfully', data: chat };
        }
        else {
            return { status: false, message: 'Already Deleted', data: null };
        }
    }
}


module.exports = chatController;