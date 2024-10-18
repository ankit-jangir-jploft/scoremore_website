import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { Link, useNavigate } from 'react-router-dom';
import Brandw from "../assets/img/score-logow.svg";
import { useTheme } from '../Components/ThemeProvider';
import axios from 'axios';
import { api_baseURL } from '../api/apiHelper';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [isChecked, setIsChecked] = useState(false); // New state for checkbox

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setIsChecked(checked); // Update checkbox state
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (!isChecked) {
            setError('You must agree to the Privacy policy and Terms & conditions');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
    
        try {
            const response = await axios.post(`${api_baseURL}/user/signup`, {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            });
            toast.success("Please verify your email");

            if (response.data.success && response.data.newUser.isEmailVerified === true) {
                navigate("/login");
                toast.success(response.data.message);
            } else {
                debugger
                setError(response.data.message);
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("error in signup", error)
            setError(error?.response?.data?.message || "Failed to sign up !!");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className='logn-pge'>
            <Row>
                <Col md={6}>
                    <Link to='/'>
                        {theme === "light" ? <img src={Brand} alt="Logo" /> : <img src={Brandw} alt="Logo" />}
                    </Link>
                    <div className='logn-pge-out'>
                        <div className='logn-pge-in'>
                            <h1>Sign Up</h1>
                            <p>Hi Welcome back, you've been missed</p>
                            {error && <p className="text-danger">{error}</p>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="First Name" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Last Name" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email ID" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="New password" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        name="confirmPassword" 
                                        value={formData.confirmPassword} 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check 
                                        type="checkbox" 
                                        label="By signing up you agree to our Privacy policy and Terms & conditions." 
                                        checked={isChecked} 
                                        onChange={handleChange} // Update the checkbox state
                                    />
                                </Form.Group>
                                
                                <Button type="submit" className='btn-primary px-5' disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
                                </Button>
                            </Form>
                            <div className='sgn-link'>
                                Already have an account? <Link to='/Login'>Sign In</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='lgn-rgt'>
                        <img src={LoginImg} alt="Signup Image" />
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
