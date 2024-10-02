import React, { useState } from 'react';
import {Button, Col, Form, Modal, Row } from 'react-bootstrap';
import Calicn from "../assets/img/calendar.svg"
import Tuttest from "../assets/img/Glyph.svg"
import Fastfive from "../assets/img/time.svg"
import Yougot from "../assets/img/thumbs-up.svg"
import Incorrectans from "../assets/img/talkin.svg"
import Readytest from "../assets/img/approve.svg"
import Timetest from "../assets/img/timet.svg"
import Subjectscomp from '../Components/Subjectscomp';
import InputRange from 'react-input-range';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(30); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const Subjects = () => {
        navigate('/Subjects');
    };
    return (
        <>
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>           
                <Row>
                    <Col md={4}>
                        <div className='card' onClick={Subjects}>
                            <i className=''>
                                <img src={Calicn} alt="Calendar" />
                            </i>
                            <h2>Daily Challenge</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card' onClick={Subjects}>
                            <i className=''>
                                <img src={Tuttest} alt="Calendar" />
                            </i>
                            <h2>Tutored Test</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card blu' onClick={Subjects}>
                            <i className=''>
                                <img src={Fastfive} alt="Fast Five" />
                            </i>
                            <h2>Fast Five</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card blu' onClick={handleShow}>
                            <i className=''>
                                <img src={Yougot} alt="You Got" />
                            </i>
                            <h2>You Got This</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card blu' onClick={Subjects}>
                            <i className=''>
                                <img src={Incorrectans} alt="Incorrectly Answered" />
                            </i>
                            <h2>Incorrectly Answered</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card' onClick={Subjects}>
                            <i className=''>
                                <img src={Timetest} alt="Timed Test" />
                            </i>
                            <h2>Timed Test</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='card' onClick={Subjects}>
                            <i className=''>
                                <img src={Readytest} alt="Readiness Test" />
                            </i>
                            <h2>Readiness Test</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content</p>
                        </div>
                    </Col>
                </Row>
            </div>

            
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Weakest Subject Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Subjectscomp/>
                <div className='modl-tim'>Timed 
                    <Form className=''>
                        <Form.Check type="switch" id="custom-switch" label=""/>
                    </Form>
                </div>
                <h4>Number of questions</h4>
                <div className="input-range">
                              <InputRange
                                maxValue={100}
                                minValue={0}
                                value={value}
                                onChange={value => setValue(value)}
                                onChangeComplete={value => console.log(value)}
                              />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Start Test
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Dashboard;
