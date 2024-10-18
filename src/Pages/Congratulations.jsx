import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Congrates from '../Components/Congrates';

const Congratulations = () => {
    const location = useLocation();
    const { 
        correctAnswers = 0, 
        totalQuestions = 0, 
        resultsData = [], 
        cardData // Add cardData here
    } = location.state || {};
    console.log("totalQuestions in congratulation", totalQuestions)
    console.log("totalQuestions in resultsData", resultsData)

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
                            {/* Pass cardData to Congrates component */}
                            <Congrates 
                                correctAnswers={correctAnswers} 
                                totalQuestions={totalQuestions} 
                                resultsData={resultsData} 
                                cardData={cardData} // Pass cardData
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Congratulations;
