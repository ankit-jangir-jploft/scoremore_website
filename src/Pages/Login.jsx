import React from 'react';
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

const Login = () => {
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
                            <h1>Sign In</h1>
                            <p>We'll email you a link to sign in password-free</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                            </Form>
                            <Button type="submit" className='btn-primary px-5' onClick={Dashboard}>Send Link</Button>
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
