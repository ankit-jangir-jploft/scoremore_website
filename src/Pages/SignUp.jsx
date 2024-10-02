import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { Link, useNavigate } from 'react-router-dom';
import Brandw from "../assets/img/score-logow.svg";
import { useTheme } from '../Components/ThemeProvider';

const SignUp = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const Dashboard = () => {
      navigate("/Dashboard");
    };
    return (
        <div className='logn-pge'>
            <Row>
                <Col md={6}>
                <Link to='/'>{theme == "light" ? (
              <img src={Brand} alt="Search" />
            ) : (
              <img src={Brandw} alt="Search" />
            )}</Link>
                    <div className='logn-pge-out'>
                        <div className='logn-pge-in'>
                            <h1>Sign Up</h1>
                            <p>Hi Welcome back, you.ve been missed</p>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control type="email" placeholder="Email ID" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="New password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="By signing up you agree to our Privacy policy and Terms & conditions." />
                                </Form.Group>
                            </Form>
                            <Button type="submit" className='btn-primary px-5' onClick={Dashboard}>Sign Up</Button>
                            <div className='sgn-link'>Already have an account? <Link to='/Login'>Sign In</Link></div>
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

export default SignUp;
