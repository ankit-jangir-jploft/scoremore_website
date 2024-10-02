import React from 'react';
import Timer from "../assets/img/timer.svg"
import Bookmark from "../assets/img/bookmark.svg"
import Settings from "../assets/img/settings.svg"
import { Col, Form, Row } from 'react-bootstrap';
import Stopbtn from "../assets/img/stop-button.svg"
import Next from "../assets/img/next.svg"
import Closerd from "../assets/img/closerd.svg"
import Checkit from "../assets/img/checkit.svg"
import Tick from "../assets/img/tick.svg"
import Tickred from "../assets/img/tick-red.svg"
import Tickgrn from "../assets/img/tick-grn.svg"
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const Tutoredtest = () => {
    return (
                    <div className='dashboard-pg'>
                        <div className='hdr-bgs'></div>
                        <div className='container inr-pg-con '> 
                            <Row>
                            <Col sm={3}>
                                <Sidebar/>
                            </Col> 
                            <Col sm={9} className='rev-rslt'>
                                <div className='test-sec'>
                                <div className='test-hdr'>
                                        <div className='tets-name'>
                                            NREMT – EMT Exam
                                        </div>
                                        <div className='tets-time'>
                                            <img src={Timer} alt="Timer" /> Time Spent 65 Seconds
                                        </div>
                                        <div className='tets-stng'>
                                            <Link to='/'><img src={Bookmark} alt="Bookmark" /></Link>
                                            <span>25/50</span>
                                            <Link to='/'><img src={Settings} alt="Settings" /></Link>
                                        </div>
                                    </div>
                                    <div className='test-main ans-descri'>
                                        <Row>
                                            <Col md={6}>
                                                <h3>Item 1 of 3</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <p className='spcl'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                <Form>
                                                    <small>Identification</small>
                                                    <label><img src={Closerd} alt="Close" /> <img src={Tickred} alt="Tick" /> A. Cras egestas augue id maximus accumsan.</label>
                                                    <label><img src={Closerd} alt="Close" /> <img src={Tickred} alt="Tick" /> B. Nam consectetur dolor in feugiat aliquet.</label>
                                                    <label><img src={Checkit} alt="Check" /> <img src={Tickgrn} alt="Tick" />C. Sed vel nisi non tellus placerat cursus.</label>
                                                    <label><img src={Checkit} alt="Check" /> <img src={Tickgrn} alt="Tick" />D. Nulla vehicula enim ut sapien egestas finibus.</label>
                                                </Form>
                                            </Col>
                                            <Col md={6}>
                                                <h3>Rationale</h3>
                                                <span>Partially Correct</span>
                                                <h3>Section #1 Client Identification</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                <span>Partially Correct</span>
                                                <h3>Section #2 Pulling the medication</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                            </Col>
                                        </Row>
                                        
                                    </div>
                                    <div className='test-ftr'>
                                        <div className='tets-name'>
                                        <Link to='/'><img src={Stopbtn} alt="Stop" /> End</Link>
                                        </div>
                                        <div className='tets-time'>

                                        </div>
                                        <div className='tets-stng'>
                                            <Link to='/'>Next <img src={Next} alt="next" /></Link> 
                                        </div>
                                    </div>
                                    <div className='rslt-badge'>
                                        <img src={Tick} alt="Nice Job" />Nice Job
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            
                        </div>
                    </div>
    );
}

export default Tutoredtest;
