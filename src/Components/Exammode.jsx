import React, { useState } from 'react';
import {Col, Form, FormLabel, Row} from 'react-bootstrap';
import Unused from "../assets/img/question.svg"
import Incorrect from "../assets/img/incorrect.svg"
import Marked from "../assets/img/check-mark.svg"
import Omitted from "../assets/img/forbidden.svg"
import InputRange from 'react-input-range';
import Sidebar from './Sidebar';


    export const Exammode = ({setType,type}) => {
    const [value, setValue] = useState (30);
    const [time, setTime] = useState (5);
    return (
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9}>
                        <div className='tbs-cnart'>
                            <h3>Questions 
                                <Form className='d-flex justify-content-end align-items-center'>
                                    <span>All</span><Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>
                            </h3>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Unused} alt="Unused Questions" /> Unused
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Incorrect} alt="Incorrect" /> Incorrect
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Marked} alt="Marked" /> Marked
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Omitted} alt="Omitted" /> Omitted
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>   
                            <Row className='mt-5'>
                                <Col md={4}><FormLabel className='rang-lbl'>Number of questions</FormLabel></Col>
                                <Col md={8}>
                                    <Form className="form">
                                        
                                        <div className="input-range">
                                            <InputRange
                                                maxValue={100}
                                                minValue={0}
                                                value={value}
                                                onChange={value => setValue(value)}
                                                onChangeComplete={value => console.log(value)}
                                            />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <Row> 
                                <Col md={4}><FormLabel className='rang-lbl'>Time per question</FormLabel></Col>
                                <Col md={8}>
                                    <Form className="form">                                        
                                        <div className="input-range">
                                            <InputRange
                                                maxValue={5}
                                                minValue={1}
                                                value={time}
                                                onChange={time => setTime(time)}
                                                onChangeComplete={time => console.log(time)}
                                            />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={12} className='text-end mt-4'>
                                    <button type="submit" className="btn btn-primary" onClick={()=>{setType(3)}}>Start Test</button>
                                    {/* <button type="submit" className="btn btn-primary">Start Test</button> */}
                                </Col>
                            </Row>                         
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Exammode;
