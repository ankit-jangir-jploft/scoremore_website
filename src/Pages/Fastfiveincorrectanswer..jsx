import React from 'react';
import Timer from "../assets/img/timer.svg"
import Bookmark from "../assets/img/bookmark.svg"
import Settings from "../assets/img/settings.svg"
import { Col, Form, Row } from 'react-bootstrap';
import Stopbtn from "../assets/img/stop-button.svg"
import Next from "../assets/img/next.svg"
import Tick from "../assets/img/tick.svg"
import Removerd from "../assets/img/removerd.svg"
import Pause from "../assets/img/pause.svg"
import Feedback from "../assets/img/feedback.svg"
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const Fastfiveincorrectanswer = () => {
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
                            <div className='test-main'>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                <Form>
                                    <Form.Check type="radio" name='1' label={`A. Cras egestas augue id maximus accumsan.`}/>
                                    <Form.Check type="radio" name='1' label={`B. Nam consectetur dolor in feugiat aliquet.`}/>
                                    <Form.Check type="radio" name='1' label={`C. Sed vel nisi non tellus placerat cursus.`}/>
                                    <Form.Check type="radio" name='1' label={`D. Nulla vehicula enim ut sapien egestas finibus.`}/>
                                </Form>
                            </div>
                            <div className='test-ftr'>
                                <div className='tets-name'>
                                <Link to='/'><img src={Stopbtn} alt="Stop" /> End</Link>
                                </div>
                                <div className='tets-time'>
                                    <Link to='/'><img src={Pause} alt="Pause" /></Link>
                                    <Link to='/'><img src={Feedback} alt="Feedback" /></Link>
                                </div>
                                <div className='tets-stng'>
                                    <Link to='/'>Next <img src={Next} alt="next" /></Link> 
                                </div>
                            </div>
                            <div className='rslt-badge rslt-badge-rng'>
                                <img src={Removerd} alt="Incorrect" />Incorrect<br/>
                                <p>Correct Answer: B</p>
                            </div>
                        </div>
                            </Col>
                            </Row>
                            
                        </div>
                    </div>
    );
}

export default Fastfiveincorrectanswer;
