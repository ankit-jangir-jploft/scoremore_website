import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';


const Reviewprtest = () => {
    const percentage = 78;
    const persntred = 0;
    return (
            <>
            <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='rev-rslt rev-prc-tst'>
                        <h2>Review Practice Tests</h2>
                        <Row>
                            <Col md={6}>
                            <Link to={"/Statisticss"}>
                                <div className='score-card'>
                                    <div className=''>
                                        <p>Test ID: <strong>2547</strong></p>
                                        <p>Date: <strong>17/07/2024</strong></p>
                                        <p>Mode: <strong>Tutorial</strong></p>
                                        <p>Total Questions: <strong>50</strong></p>
                                    </div>
                                    <div className='rvew-prt'>
                                        <div className='progrs-mn'>
                                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            <span>35/50</span>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </Col>
                            <Col md={6}>
                                <Link to={"/Statisticss"}>
                                    <div className='score-card'>
                                        <div className=''>
                                            <p>Test ID: <strong>2547</strong></p>
                                            <p>Date: <strong>17/07/2024</strong></p>
                                            <p>Mode: <strong>Tutorial</strong></p>
                                            <p>Total Questions: <strong>50</strong></p>
                                        </div>
                                        <div className='rvew-prt rvew-prt-red'>
                                            <div className='progrs-mn'>
                                                <CircularProgressbar value={persntred} text={`${persntred}%`} />
                                                <span>00/00</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>            
                    </Col>
                </Row>    
            </div>           
        </div>
        
            </>
              
  )
}
export default Reviewprtest;
