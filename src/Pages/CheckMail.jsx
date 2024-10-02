import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { useTheme } from '../Components/ThemeProvider';
import Brandw from "../assets/img/score-logow.svg";
import { Link } from 'react-router-dom';

const CheckMail = () => {
    const { theme } = useTheme();
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
                            <h1>Check your email</h1>
                            <p>Tap the button in email that we sent to
                            <span>xyz@gmail.com</span> or Enter Code below</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="text" placeholder="Enter Code" />
                                </Form.Group>
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

export default CheckMail;
