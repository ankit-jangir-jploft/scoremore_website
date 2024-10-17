import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Subjectscomp from '../Components/Subjectscomp';

export const StepA = ({ setType, cardData, setSelectedSubjects }) => {
    const handleSetSelectedSubjects = (subjects) => {
        console.log("Selected subjects:", subjects);
        setSelectedSubjects(subjects);
        // Additional logic if needed
    };

    return (
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <Subjectscomp setSelectedSubjects={handleSetSelectedSubjects} cardData={cardData} />
                        <Row>
                            <Col md={12} className='text-end'>
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    onClick={() => {
                                        console.log("Moving to the next step");
                                        setType(2); // Change to next step
                                    }} 
                                >
                                    Next
                                </button>
                            </Col>
                        </Row>                     
                    </Col>
                </Row>    
            </div>           
        </div>
    );
};