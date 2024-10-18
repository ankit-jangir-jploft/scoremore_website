import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Roadlock from "../assets/img/edit-stst.svg";
import Medical from "../assets/img/star.svg";
import Lungs from "../assets/img/lungs.svg";
import Heart from "../assets/img/heart.svg";
import Trauma from "../assets/img/trauma.svg";
import Emsoperations from "../assets/img/emergency-services.svg";
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { api_baseURL } from '../api/apiHelper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Statisticss = () => {
    const [testResults, setTestResults] = useState([]);
    const [allExamRecord, setAllExamRecord] = useState({ overallStats: {}, subjectInsights: [] });

    // Fetch user exam records on component mount
    useEffect(() => {
        const fetchAllExamRecord = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem("userId");
            try {
                const response = await axios.post(`${api_baseURL}/user/allExamRecord`, { userId }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data.success) {
                    setAllExamRecord(response.data); // Set the response data
                }
            } catch (error) {
                console.error('Error fetching all exam records:', error);
            }
        };

        fetchAllExamRecord();
    }, []);

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem('token');
            try {
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

    const { overallStats, subjectInsights } = allExamRecord;

    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con prvc-pol'>
                    <div className='stct-bg'>
                        <Row>
                            <Col>
                                <h3>{overallStats.totalCorrectQuestions} / {overallStats.totalUniqueQuestions} </h3>
                                <p>Correct of Answered</p>
                            </Col>
                            <Col>
                                <SemiCircleProgressBar percentage={overallStats.percentage} showPercentValue background={'#E6F4FF'} stroke={'#FFC04E'} />
                            </Col>
                            <Col>
                                <h3><img src={Roadlock} alt="twitter" /></h3>
                                <p>Daily Streak</p>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col sm={7}>
                            <Row className='rew-brdr'>
                                <Col sm={8} className='tiny-lrr'>Subjects Insights</Col>
                                <Col sm={4} className='text-end tinytr'>Correct / Answered</Col>
                            </Row>
                            {subjectInsights.map((subject) => (
                                <Row className='rew-brdr' key={subject.subject}>
                                    <Col sm={8}>
                                        <img 
                                            src={
                                                subject.subject === 'medical' ? Medical :
                                                subject.subject === 'airway' ? Lungs :
                                                subject.subject === 'cardiology' ? Heart :
                                                subject.subject === 'trauma' ? Trauma :
                                                subject.subject === 'emsOperations' ? Emsoperations :
                                                null
                                            }
                                            alt={subject.subject} 
                                        /> 
                                        {subject.subject.charAt(0).toUpperCase() + subject.subject.slice(1)}
                                    </Col>
                                    <Col sm={4} className='text-end'>
                                        {subject.correctAnswered} / {subject.totalAnswered}
                                    </Col>
                                </Row>
                            ))}
                        </Col>

                        <Col sm={5}>
                            <Row className='rew-brdr'>
                                <Col sm={12} className='tinytr manul-mr'>Subject Score</Col>
                            </Row>
                            {subjectInsights.map((subject) => (
                                <Row className='rew-brdr' key={subject.subject}>
                                    <Col sm={2} className='text-end'><b>{subject.percentage}%</b></Col>
                                    <Col sm={10}>
                                        <ProgressBar variant={subject.percentage < 50 ? "danger" : "success"} now={parseFloat(subject.percentage)} />
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Row>

                    <Row className='mt-5 justify-content-center'>
                        <Col md={6}>
                            {testResults.map((test) => {
                                const percentage = ((test.totalCorrect / test.totalNoOfQuestion) * 100).toFixed(2); // Calculate percentage
                                return (
                                    <Col md={12} className='mt-4' key={test._id}>
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
                                                        <span>{test.totalCorrect}/{test.totalNoOfQuestion}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                );
                            })}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Statisticss;
