import React from 'react';
import {Form} from 'react-bootstrap';
import Unused from "../assets/img/question.svg"
import Incorrect from "../assets/img/incorrect.svg"
import Marked from "../assets/img/check-mark.svg"
import Omitted from "../assets/img/forbidden.svg"


const Questions = () => {
    return (
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
                        </div>
    );
}

export default Questions;
