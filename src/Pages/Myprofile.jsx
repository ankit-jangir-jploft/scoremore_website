import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import { useState, useEffect } from 'react';
import Editpen from "../assets/img/edit-pen.svg";
import axios from 'axios';
import { api_baseURL, api_img_url } from '../api/apiHelper';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        profilePicture: '',
    });

    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${api_baseURL}/user/myProfile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.success) {
                setUserData({
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    email: response.data.user.email,
                    mobileNumber: response.data.user.mobileNumber || '',
                    profilePicture: response.data.user.profilePicture,
                });
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    useEffect(() => {
        fetchUserProfile(); // Call the fetch function on component mount
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('firstName', userData.firstName);
            formData.append('lastName', userData.lastName);
            formData.append('email', userData.email);
            formData.append('mobileNumber', userData.mobileNumber);
            if (image) {
                formData.append('profilePicture', image);
            }

            const response = await axios.patch(`${api_baseURL}/user/editProfile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                toast.success("Profile update Successfully !!")
                // Refetch the user profile after updating
                fetchUserProfile(); // Call the fetch function to refresh user data
            } else {
                toast.error("Error updating profile: " + response.data.message);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("An error occurred while updating the profile.");
        }
    };

    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con prfle-pg'>
                    <Row>
                        <Col sm={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={9} className='rev-rslt my-acnt'>
                            <div className='prfle-pgin'>
                                <div className='prfl-pictr'>
                                    <span>
                                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                                    </span>
                                    {image ? (
                                        <img src={URL.createObjectURL(image)} alt="Preview" />
                                    ) : (
                                        userData.profilePicture && (
                                            <img src={`${api_img_url}/assets/profile_pictures/${userData.profilePicture}`} alt="Profile" />
                                        )
                                    )}


                                    <p><img src={Editpen} alt="Edit" /></p>
                                </div>
                                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-2">
                                    <Form.Control
                                        type="text"
                                        value={userData.firstName}
                                        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-2">
                                    <Form.Control
                                        type="text"
                                        value={userData.lastName}
                                        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-2">
                                    <Form.Control
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-2">
                                    <Form.Control
                                        type="text"
                                        value={userData.mobileNumber}
                                        onChange={(e) => setUserData({ ...userData, mobileNumber: e.target.value })}
                                    />
                                </FloatingLabel>
                                <Button variant="primary" onClick={handleUpdateProfile}>Update Profile</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
