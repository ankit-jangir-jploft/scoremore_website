import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import Brandw from "../assets/img/score-logow.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Components/ThemeProvider';


const ForgotPassword = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const ResetPassword = () => {
      navigate("/ResetPassword");
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
                            <h1>Forgot Password?</h1>
                            <p>Enter your email ID to receive a link</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                            </Form>
                            <Button type="submit" className='btn-primary px-5' onClick={ResetPassword}>Send Link</Button>
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

export default ForgotPassword;
