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
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import AppleLogin from 'react-apple-login';

const Login = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${api_baseURL}/user/signin/otp`, { email }, {withCredentials: true});
            console.log("Login response:", response);

            if (response.data.success) {
                toast.success("Please check your mail for OTP!");
                localStorage.setItem('resetEmail', email);
                navigate("/CheckMail");
            } else {
                setError(response.data.message);
                toast.error(response.data.message);
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

    // Simulated provider data for social logins
    const simulateProviderData = (provider) => {
        switch (provider) {
            case "Google":
                return {
                    email: "user@google.com",
                    id: "googleUserId",
                    firstName: "John",
                    lastName: "Doe",
                };
            case "Facebook":
                return {
                    email: "user@facebook.com",
                    id: "facebookUserId",
                    firstName: "Jane",
                    lastName: "Doe",
                };
            case "Apple":
                return {
                    email: "user@apple.com",
                    id: "appleUserId",
                    firstName: "Sam",
                    lastName: "Smith",
                };
            default:
                return {};
        }
    };

    const handleSocialLogin = async (provider, providerData) => {
        const socialData = {
            email: providerData.email || '',
            socialId: providerData.id || '',
            firstName: providerData.firstName || '',
            lastName: providerData.lastName || '',
            registrationType: provider,
        };

        try {
            const response = await axios.post(`${api_baseURL}/user/socialLogin`, socialData);
            console.log("Social login response:", response);

            if (response.data.success) {
                toast.success("Login Successful!");
                localStorage.setItem('userToken', response.data.token);
                navigate("/dashboard");
            } else {
                setError(response.data.message);
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Social login error:", error);
            toast.error('Failed to login with social account.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className='logn-pge'>
            <ToastContainer />
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
                            <img className='d-block m-auto mt-5' src={Devider} alt="Devider" />

                            {/* Social login buttons with same design */}
                            <div className='social-login-container'>
                                {/* <Link className='socl-btn' onClick={() => handleSocialLogin("Google", simulateProviderData("Google"))}>
                                    <img src={Google} alt="Google" /> Continue with Google
                                </Link> */}
                                 {/* <GoogleOAuthProvider clientId="">
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => handleSocialLogin("Google", credentialResponse)}
                                    onError={() => toast.error("Google login failed")}
                                />
                                </GoogleOAuthProvider>
                                <FacebookLogin
                                appId="YOUR_FACEBOOK_APP_ID"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={(response) => handleSocialLogin("Facebook", response)}
                                onFailure={() => toast.error("Facebook login failed")}
                            />
                               {/* Apple Login */}
                            {/* <AppleLogin
                                clientId="YOUR_APPLE_CLIENT_ID"
                                
                                redirectURI="https://example.com/callback"
                                callback={(response) => handleSocialLogin("Apple", response)}
                                onFailure={() => toast.error("Apple login failed")}
                            /> */}

                                <Link className='socl-btn' onClick={() => handleSocialLogin("Google", simulateProviderData("Google"))}>
                                    <img src={Google} alt="Google" /> Continue with Google
                                </Link>
                                <Link className='socl-btn' onClick={() => handleSocialLogin("Facebook", simulateProviderData("Facebook"))}>
                                    <img src={Facebook} alt="Facebook" /> Continue with Facebook
                                </Link>
                                <Link className='socl-btn' onClick={() => handleSocialLogin("Apple", simulateProviderData("Apple"))}>
                                    <img src={Apple} alt="Apple" /> Continue with Apple
                                </Link>
                             
                            </div>

                            <div className='sgn-link'>Don't have an account? <Link to='/SignUp'>Sign Up</Link></div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='lgn-rgt'>
                        <img src={LoginImg} alt="Login illustration" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
