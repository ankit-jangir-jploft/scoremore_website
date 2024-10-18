import React, { useEffect, useState } from 'react';
import { Col, Row, Accordion, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { api_baseURL } from '../api/apiHelper';
import Remove from "../assets/img/remove.svg";
import Ticksml from "../assets/img/ticksml.svg";

const Reviewprtest = () => {
    const [testResults, setTestResults] = useState([]);

    // Fetch user profile data on component mount
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${api_baseURL}/user/myProfile`, {}, {
                    headers: { 
                        Authorization: `Bearer ${token}`, 
                        'Content-Type': 'application/json' 
                    },
                    withCredentials: true,
                });
                if (response.data.success) {
                    setTestResults(response.data.user.testResults);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9} className='rev-rslt rev-prc-tst'>
                        <h2>Review Practice Tests</h2>
                        <Row>
                            {testResults.map((test) => {
                                const percentage = ((test.totalCorrect / test.totalNoOfQuestion) * 100).toFixed(2); // Calculate percentage
                                return (
                                    <Col md={6} key={test._id}>
                                        <Link to={`/Reviewquestions/${test.testId}`}>
                                            <div className='score-card'>
                                                <div className=''>
                                                    <p>Test ID: <strong>{test.testId}</strong></p>
                                                    <p>Date: <strong>{test.date}</strong></p>
                                                    <p>Mode: <strong>{test.testType}</strong></p>
                                                    <p>Total Questions: <strong>{test.totalNoOfQuestion}</strong></p>
                                                </div>
                                                <div className='rvew-prt'>
                                                    <div className='progrs-mn'>
                                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                        <span>{test.totalCorrect}/{test.totalAttemptedQuestions}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Reviewprtest;
