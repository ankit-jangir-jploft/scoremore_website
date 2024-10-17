import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Dtable from '../Components/Table';

const Testdetails = () => {
    const location = useLocation();
    const { testName, resultsData, totalQuestions } = location.state || {}; // No default value

    // Check if resultsData is defined
    console.log("result data in Testdetails",testName, resultsData); // For debugging

    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={9}>
                            <div className='tst-rslt-m'>
                                <h2>Test Result</h2>
                                <div className='tst-rslt-tbl'>
                                    <div className='tst-nme'>Test Name: {testName || "No Test Name Provided"}</div> {/* Dynamic Test Name */}
                                    <Dtable results={resultsData} totalQuestions={totalQuestions} />

                                </div>                                 
                            </div>                                       
                        </Col>
                    </Row>    
                </div>           
            </div>        
        </>
    );
};

export default Testdetails;
