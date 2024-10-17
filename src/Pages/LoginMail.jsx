import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import Devider from "../assets/img/devider.svg";
import Google from "../assets/img/search.svg";
import Facebook from "../assets/img/facebookl.svg";
import Apple from "../assets/img/apple.svg";
import Brandw from "../assets/img/score-logow.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Components/ThemeProvider';
import axios from 'axios'; // Import axios
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { api_baseURL } from '../api/apiHelper';

const LoginMail = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post(`${api_baseURL}/user/signin`, { email, password },
                { withCredentials: true });
            console.log("response in signin with password", response)
            console.log("token in signin with password", response?.data?.token)  // Call the API
            if (response.data.success && response?.data?.token) {
                const token = response?.data?.token;
                const userId = response?.data?.user?._id;
                // After user logs in and you have the userId
                localStorage.setItem('userId', userId); // Store userId
                localStorage.setItem('token', token); // Store token
                // Store token in localStorage
                // Redirect to Dashboard
                toast.success("Login successful! Welcome back.");
                navigate("/Dashboard");
            } else {
                // Show error toast
                toast.error(response.data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error); // Log any error
            toast.error("An error occurred during login. Please try again."); // Show error toast
        }
    };

    return (
        <div className='logn-pge'>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
            <Row>
                <Col md={6}>
                    <Link to='/'>{theme === "light" ? (
                        <img src={Brand} alt="Brand" />
                    ) : (
                        <img src={Brandw} alt="Brand" />
                    )}</Link>
                    <div className='logn-pge-out'>
                        <div className='logn-pge-in'>
                            <h1>Sign In</h1>
                            <p>Hi Welcome back, you’ve been missed</p>
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
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password} // Bind password state
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
                                        required // Mark as required
                                    />
                                </Form.Group>
                                <Button type="submit" className='btn-primary px-5'>Sign In</Button>
                                <Link to='/ForgotPassword'>Forgot Password?</Link>
                                <img className='d-block m-auto mt-5' src={Devider} alt="Devider" />
                                <Link className='socl-btn' to='/'><img src={Google} alt="Google" /> Continue with Google</Link>
                                <Link className='socl-btn' to='/'><img src={Facebook} alt="Facebook" /> Continue with Facebook</Link>
                                <Link className='socl-btn' to='/'><img src={Apple} alt="Apple" /> Continue with Apple</Link>
                                <div className='sgn-link'>Don't have an account? <Link to='/SignUp'>Sign Up</Link></div>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='lgn-rgt'>
                        <img src={LoginImg} alt="Login" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default LoginMail;
