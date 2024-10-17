import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import Devider from "../assets/img/devider.svg";
import Google from "../assets/img/search.svg";
import Facebook from "../assets/img/facebookl.svg";
import Apple from "../assets/img/apple.svg";
import { Link, useNavigate } from 'react-router-dom';
import Brandw from "../assets/img/score-logow.svg";
import { useTheme } from '../Components/ThemeProvider';
import axios from 'axios';
import { api_baseURL } from '../api/apiHelper'; // Adjust the path if needed
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${api_baseURL}/user/signin/otp`, { email }, {withCredentials: true});
            console.log("Login response:", response);

            if (response.data.success) {
                toast.success("Please check your mailid for Otp !!");
                localStorage.setItem('resetEmail', email);
                navigate("/CheckMail");
            } else {
                setError(response.data.message);
                toast.error(response.data.message
                );
            }
        } catch (err) {
            console.error("Login error:", err);
            setError('Failed to log in, please try again later.');
            toast.error('Failed to log in, please try again later.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className='logn-pge'>
            <ToastContainer /> {/* Include ToastContainer for toast notifications */}
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
                            <p>We'll email you a link to sign in password-free</p>
                            {error && <p className="text-danger">{error}</p>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email Address" 
                                        value={email}
                                        onChange={handleEmailChange} 
                                        required 
                                    />
                                </Form.Group>
                                <Button type="submit" className='btn-primary px-5'>Send Link</Button>
                            </Form>
                            <Link to='/LoginMail'>Sign In with Password</Link>
                            <img className='d-block m-auto mt-5' src={Devider} alt="Image" />
                            <Link className='socl-btn' to='/'><img src={Google} alt="Google" /> Continue with Google</Link>
                            <Link className='socl-btn' to='/'><img src={Facebook} alt="Facebook" /> Continue with Facebook</Link>
                            <Link className='socl-btn' to='/'><img src={Apple} alt="Apple" /> Continue with Apple</Link>
                            <div className='sgn-link'>Don't have an account? <Link to='/SignUp'>Sign Up</Link></div>
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

export default Login;
