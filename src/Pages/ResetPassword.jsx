import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import Brandw from "../assets/img/score-logow.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Components/ThemeProvider';

const ResetPassword = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const Login = () => {
      navigate("/Login");
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
                            <h1>Reset Password</h1>
                            <p>Enter a new password to update your password</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="New password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="New password" />
                                </Form.Group>
                            </Form>
                            <Button type="submit" className='btn-primary px-5' onClick={Login}>Submit</Button>
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
