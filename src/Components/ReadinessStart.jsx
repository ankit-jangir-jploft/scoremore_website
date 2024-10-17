import React from "react";
import Sidebar from "./Sidebar";
import { Col, Row } from "react-bootstrap";



const RedinessStart = () => {
    return (
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                       
                   <Row className="justify-content-center">
                    <Col sm={8}>
                    <div className="radiness_item"> 
                           <h3>Readiness Test</h3>
                           <ul className="radiness_list">
                            <li>Practice similar to NREMT EMT exam</li>
                            <li>A total of 70 questions</li>
                            <li>Timed test</li>
                            <li>Covers all the subjects</li>
                           </ul>
                       </div>
                    </Col>
                   </Row>

                    </Col>
                </Row>    
            </div>           
        </div>
    )

}

export default RedinessStart;