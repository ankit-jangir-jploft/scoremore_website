
import { Col, Form, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Nextnn from "../assets/img/next-n.svg";
import User from "../assets/img/user-ma.svg";
import Key from "../assets/img/key.svg";
import Bell from "../assets/img/bell.svg";
import Brightnes from "../assets/img/brightnes.svg";
import Addpls from "../assets/img/addpls.svg";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

import Chat from "../assets/img/chat.svg";
import Contactsup from "../assets/img/contact-sup.svg";
import Heartma from "../assets/img/heartma.svg";
import Share from "../assets/img/share.svg";
import Padlock from "../assets/img/padlock.svg";
import Termcond from "../assets/img/term-cond.svg";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../Components/ThemeProvider';


const Myaccount = () => {
    const { theme, toggleTheme } = useTheme();



    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>
                    <Row>
                        <Col sm={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={9} className='rev-rslt my-acnt'>
                            <h2>My Account</h2>
                            <p>Profile</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Myprofile'}><img src={User} className='icn-img' alt="Profile Information" /> Profile Information</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                    <Col md={12} ><hr /></Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/ForgotPassword'}><img src={Key} className='icn-img' alt="Password" /> Password</Link></Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                </Row>
                            </div>
                            <p>Preferences</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Studyreminders'}><img src={Bell} className='icn-img' alt="Push Notifications" /> Push Notifications</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                    <Col md={12} ><hr /></Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/'}><img src={Brightnes} className='icn-img' alt="Accessibility" /> Accessibility</Link></Col>
                                    <Col md={6} className='text-end'>
                                        <Form className="d-inline-block">
                                            {/* <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        checked={theme == "dark"}
                                        onChange={(e) => {
                                            toggleTheme();
                                        }}
                                        /> */}

                                            <label className="theme-toggle-switch">
                                                <input
                                                    type="checkbox"
                                                    checked={theme === "light"}
                                                    onChange={toggleTheme}
                                                />
                                                <span className="slider">
                                                    <FaSun className="icon sun" />
                                                    <FaMoon className="icon moon" />
                                                </span>
                                            </label>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                            <p>SUBSCRIPTION</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Plansandpricing'}><img src={Addpls} className='icn-img' alt="Plus Membership" /> Plus Membership</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                </Row>
                            </div>
                            <p>Help & Support</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Helpfaq'}><img src={Chat} className='icn-img' alt="FAQs" /> FAQs</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                    <Col md={12} ><hr /></Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Helpfaq'}><img src={Contactsup} className='icn-img' alt="Contact Support" /> Contact Support</Link></Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                </Row>
                            </div>
                            <p>GET INVOLVED</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Writeareview'}><img src={Heartma} className='icn-img' alt="Rate Us" /> Rate Us</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                    <Col md={12} ><hr /></Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Sharewithfriends'}><img src={Share} className='icn-img' alt="Tell a friend" /> Tell a friend</Link></Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                </Row>
                            </div>
                            <p>LEGAL</p>
                            <div className='prfl-bg'>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Privacypolicy'}><img src={Padlock} className='icn-img' alt="Privacy policy" /> Privacy policy</Link>
                                    </Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                    <Col md={12} ><hr /></Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Link to={'/Termsandconditions'}><img src={Termcond} className='icn-img' alt="Terms and conditions" /> Terms and conditions</Link></Col>
                                    <Col md={6} className='text-end'><Link to={'/'}><img src={Nextnn} alt="Next" /></Link></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>

    )
}
export default Myaccount;
