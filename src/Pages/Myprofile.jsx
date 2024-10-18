import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { api_baseURL, api_img_url } from '../api/apiHelper';
import { toast } from 'react-toastify';

import Editpen from "../assets/img/edit-pen.svg";

const MyProfile = () => {
    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        profilePicture: '',
    });
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");

    // Fetch user profile data
    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${api_baseURL}/user/myProfile`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
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
        fetchUserProfile(); // Fetch user profile on component mount
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleEmailChange = (e) => {
        setEmailError("You cannot change your email!");
    };

    const handleUpdateProfile = async () => {
        setEmailError("");

        if (userData.mobileNumber.length < 7 || userData.mobileNumber.length > 15) {
            setMobileError("Mobile number must be between 7 and 15 characters.");
            return;
        }

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
                toast.success("Profile updated successfully!");
                fetchUserProfile(); // Refresh user data after updating
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
                                    ) : userData.profilePicture ? (
                                        <img src={`${api_img_url}/assets/profile_pictures/${userData.profilePicture}`} alt="Profile" />
                                    ) : (
                                        <div className="no-profile-picture">
                                            <p> Add profile picture</p>
                                        </div>
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
                                        onChange={handleEmailChange} // Prevent editing the email
                                        readOnly
                                        onKeyDown={(e) => e.preventDefault()} // Prevent backspace or any other key from affecting the field
                                    />
                                </FloatingLabel>
                                {emailError && <div className="text-danger mb-2">{emailError}</div>}
                                <PhoneInput
                                    placeholder="Contact Number"
                                    international
                                    defaultCountry="IN" // Change to "IN" for India
                                    value={userData.mobileNumber}
                                    onChange={(value) => setUserData({ ...userData, mobileNumber: value })}
                                    className="mb-2"
                                    countrySelectProps={{ unicode: false }} // Optional: To show country code without flag
                                    onKeyDown={(e) => {
                                        // Allow only numbers, backspace, delete, tab, and arrow keys
                                        if (
                                            !/[0-9]/.test(e.key) &&
                                            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)
                                        ) {
                                            e.preventDefault();
                                        }

                                        // Prevent typing more than 15 digits
                                        if (userData.mobileNumber.replace(/\D/g, '').length >= 15 && e.key !== 'Backspace') {
                                            e.preventDefault();
                                        }
                                    }}
                                />

                                {mobileError && <div className="text-danger mb-2">{mobileError}</div>}
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
