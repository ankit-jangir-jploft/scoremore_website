import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import Brandw from "../assets/img/score-logow.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Components/ThemeProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_baseURL } from '../api/apiHelper';

const ResetPassword = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        // Validate that the new password and confirm password match
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        // Retrieve email from localStorage for the API call
        const email = localStorage.getItem('resetEmail');
        console.log("email in reset password", email) // Ensure this was set when the user requested the reset

        try {
            console.log("otp, newpassword email", otp, newPassword, email)
            const response = await axios.post(`${api_baseURL}/user/resetPassword`, { otp, newPassword, email });
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/LoginMail"); // Redirect to login after successful reset
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : "Something went wrong!";
            toast.error(errorMessage);
        }
    };

    return (
        <div className='logn-pge'>
            <Row>
                <Col md={6}>
                    <Link to='/'>{theme === "light" ? (
                        <img src={Brand} alt="Brand Logo" />
                    ) : (
                        <img src={Brandw} alt="Brand Logo" />
                    )}</Link>
                    <div className='logn-pge-out'>
                        <div className='logn-pge-in'>
                            <h1>Reset Password</h1>
                            <p>Enter the OTP and your new password</p>
                            <Form onSubmit={handleResetPassword}>
                                <Form.Group className="mb-3" controlId="formGroupOtp">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter OTP" 
                                        value={otp} 
                                        onChange={(e) => setOtp(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupNewPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="New Password" 
                                        value={newPassword} 
                                        onChange={(e) => setNewPassword(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm New Password" 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Button type="submit" className='btn-primary px-5'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='lgn-rgt'>
                        <img src={LoginImg} alt="Image" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ResetPassword;
