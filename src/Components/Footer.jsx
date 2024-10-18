import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import LogoFooter from "../assets/img/logo-footer.svg";
import Facebook from "../assets/img/facebook.svg"
import Twitter from "../assets/img/twitter.svg"
// import { FaXTwitter } from "react-icons/fa6";

import Instagram from "../assets/img/instagram.svg"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <Container>
                <footer>
                    <Row>
                        <Col>
                        <a href='/'>
                        <img src={LogoFooter} alt="Logo" className='mb-3' />
                        </a>
                            
                            {/* <p>20 Osgood Rd, Milford, NH 03055, USA
                            +1283871239190213021</p> */}
                            <a href=''>
                                <img src={Facebook} alt="Social" />
                            </a>
                            <a href=''>

                                <img src={Twitter} alt="Social" />
                            </a>
                            <a href=''>
                                <img src={Instagram} alt="Social" />
                            </a>
                        </Col>
                        <Col>
                            <h4>Company</h4>
                            <ListGroup>
                                <ListGroup.Item><Link to="/Createprofile">Create Profile</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/Helpfaq">Support</Link></ListGroup.Item>
                                {/* <ListGroup.Item><Link to="/Helpfaq">Contact</Link></ListGroup.Item> */}
                            </ListGroup>
                        </Col>
                        <Col>
                            <h4>Product</h4>
                            <ListGroup>
                                {/* <ListGroup.Item><Link to="/Billinghistory">Billing History</Link></ListGroup.Item> */}
                                <ListGroup.Item><Link to="/Plansandpricing">Pricing</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/Writeareview">Write a Review</Link></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <h4>Legal</h4>
                            <ListGroup>
                                <ListGroup.Item><Link to="/Termsandconditions">Terms & Conditions</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/Privacypolicy">Privacy policy</Link></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <h4>Use the App</h4>
                            <img className='qr-sec' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png" alt="Social" />
                        </Col>
                    </Row>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;
