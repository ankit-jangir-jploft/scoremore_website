import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'; // Import Spinner
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import Brandw from "../assets/img/score-logow.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Components/ThemeProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_baseURL } from '../api/apiHelper';

const ForgotPassword = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // State for email input
    const [loading, setLoading] = useState(false); // State for loader

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true); // Show loader when request starts

        try {
            const response = await axios.post(`${api_baseURL}/user/forgotPassword`, { email });
            if (response.data.success) {
                localStorage.setItem('resetEmail', email);
                navigate("/ResetPassword"); // Store email temporarily
                toast.success("Check your email for the OTP!");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred while requesting password reset.");
        } finally {
            setLoading(false); // Hide loader when request ends
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
                            <h1>Forgot Password?</h1>
                            <p>Enter your email ID to receive a link</p>
                            <Form onSubmit={handleSubmit}> {/* Handle form submission */}
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email Address" 
                                        value={email} // Bind email state
                                        onChange={(e) => setEmail(e.target.value)} // Update email state
                                        required // Mark as required
                                    />
                                </Form.Group>

                                {/* Show loader when loading, otherwise show button */}
                                {loading ? (
                                    <Button className="btn-primary px-5" disabled>
                                        <Spinner animation="border" size="sm" /> Sending...
                                    </Button>
                                ) : (
                                    <Button type="submit" className='btn-primary px-5'>Send Link</Button>
                                )}
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='lgn-rgt'>
                        <img src={LoginImg} alt="Login Illustration" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ForgotPassword;
