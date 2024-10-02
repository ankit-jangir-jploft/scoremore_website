import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import Medical from "../assets/img/star.svg"
import Lungs from "../assets/img/lungs.svg"
import Heart from "../assets/img/heart.svg"
import Trauma from "../assets/img/trauma.svg"
import Emsoperations from "../assets/img/emergency-services.svg"


const Subjectscomp = () => {
    return (
                        <div className='tbs-cnart'>
                            <h3>Subjects 
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>
                            </h3>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Medical} alt="Medical" /> Medical
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Lungs} alt="Lungs" /> Airway
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Heart} alt="Heart" /> Cardiology
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Trauma} alt="Trauma" /> Trauma
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>
                            <div className='toggle-bg'>
                                <div className=''>
                                    <img src={Emsoperations} alt="EMS Operations" /> EMS Operations
                                </div>
                                <Form>
                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                </Form>                                
                            </div>                            
                        </div>
    );
}

export default Subjectscomp;
