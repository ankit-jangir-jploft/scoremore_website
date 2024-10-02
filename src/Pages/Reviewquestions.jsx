import React, { useState } from 'react';
import {Accordion, Col, Row, Tab, Tabs} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Remove from "../assets/img/remove.svg";
import Ticksml from "../assets/img/ticksml.svg";


const Reviewquestions = () => {
    const [key, setKey] = useState('all');
    return (
            <>
            <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='rev-rslt'>
                        <h2>Review Questions</h2>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab eventKey="all" title="All">
                                        <Accordion.Header>
                                            <p>Question ID</p>
                                            <p>Subject</p>
                                            <p>Result </p>
                                            <span></span>
                                        </Accordion.Header>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Medical</p>
                                            <p><span className='badge-red'>Incorrect</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Medical</p>
                                            <p><span className='badge-grn'>Correct</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Airway</p>
                                            <p><span className='badge-red'>Incorrect</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Cardiology</p>
                                            <p><span className='badge-grn'>Correct</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Trauma</p>
                                            <p><span className='badge-grn'>Correct</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>EMS Operations</p>
                                            <p><span className='badge-grn'>Correct</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>
                                            <p>5687</p>
                                            <p>Trauma</p>
                                            <p><span className='badge-grn'>Correct</span></p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p><strong>Question:</strong> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            <ul>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. Option One</li>
                                                <li><img src={Ticksml} alt="Right" /> B. Option Two</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> C. Option Three</li>
                                                <li className='wrng'><img src={Remove} alt="Wrong" /> A. D. Option Four</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="marked" title="Marked">
                                Marked
                            </Tab>
                            <Tab eventKey="incorrect" title="Incorrect">
                                Incorrect
                            </Tab>
                            <Tab eventKey="correct" title="Correct">
                                Correct
                            </Tab>
                            </Tabs>                  
                    </Col>
                </Row>    
            </div>           
        </div>
        
            </>
              
  )
}
export default Reviewquestions;
