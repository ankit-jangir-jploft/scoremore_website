import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import Calicn from "../assets/img/calendar.svg";
import Tuttest from "../assets/img/Glyph.svg";
import Fastfive from "../assets/img/time.svg";
import Yougot from "../assets/img/thumbs-up.svg";
import Incorrectans from "../assets/img/talkin.svg";
import Readytest from "../assets/img/approve.svg";
import Timetest from "../assets/img/timet.svg";
import Subjectscomp from '../Components/Subjectscomp';
import InputRange from 'react-input-range';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_baseURL } from '../api/apiHelper';
import { v4 as uuidv4 } from 'uuid';
import { TestContext } from '../Components/TestContext';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(30);
    const [weakestSubject, setWeakestSubject] = useState(null);
    const [allExamRecord, setAllExamRecord] = useState([]);
    const [isTimed, setIsTimed] = useState(true);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [isWeakestSubjectSelected, setIsWeakestSubjectSelected] = useState(true); // State for weakest subject toggle

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const { setTestDetails } = useContext(TestContext); // Use context to set test details

    // Function to fetch all exam records
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
                setAllExamRecord(response.data);
                const subjectInsights = response.data.subjectInsights;
    
                // Find the minimum percentage value
                const minPercentage = Math.min(...subjectInsights.map(subject => parseFloat(subject.percentage)));
    
                // Collect all subjects that have the same minimum percentage
                const weakestSubjects = subjectInsights.filter(subject => parseFloat(subject.percentage) === minPercentage);
    
                // Map to get only the subjects' names
                const weakestSubjectNames = weakestSubjects.map(subject => subject.subject);
    
                // Set the weakest subjects
                setWeakestSubject(weakestSubjectNames);
                
                return true;
            }
        } catch (error) {
            console.error('Error fetching all exam records:', error);
            return false;
        }
    };
    

    const startTest = async () => {
        let userId = localStorage.getItem("userId");
        const generatedTestId = uuidv4();
        
        const requestData = {
            userId: userId,
            cardType: 'youGotThis',
            subjects: selectedSubjects,
            questionType: {},
            numberOfQuestions: value,
            testId: generatedTestId,
            weakestSubjectToggle: isWeakestSubjectSelected // Send the toggle state for the weakest subject
        };

        try {
            const response = await axios.post(`${api_baseURL}/question/filterQuestion`, requestData);
            if (response.data.success) {
                const questions = response.data.data;
                // Use context to store test details
                setTestDetails({ card: 'youGotThis', questions, generatedTestId });
                navigate(`/Subjects/youGotThis`);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error fetching questions");
        }
    };

    const selectCard = async (card) => {
        if (card === "youGotThis") {
            // Handle 'youGotThis' with context and reset toggles
            const success = await fetchAllExamRecord();
            if (success) {
                setIsTimed(true);
                setIsWeakestSubjectSelected(true); // Ensure weakest subject toggle is checked
                handleShow();
            } else {
                toast.error("Failed to fetch exam records.");
            }
        } else if (card === "readinessTest") {
            let userId = localStorage.getItem("userId");
            const generatedTestId = uuidv4();
            const requestData = {
                userId: userId,
                cardType: card,
                subjects: {},
                questionType: {},
                numberOfQuestions: 50,
                testId: generatedTestId
            };

            const response = await axios.post(`${api_baseURL}/question/filterQuestion`, requestData);
            if (response.data.success) {
                const questions = response.data.data;
                setTestDetails({ card, questions, generatedTestId });
                navigate(`/Subjects/${card}`);
            } else {
                toast.error(response.data.message);
            }
        } else {
            // Other cards functionality
            let userId = localStorage.getItem("userId");
            const generatedTestId = uuidv4();
            const requestData = {
                userId: userId,
                cardType: card,
                subjects: {},
                questionType: {},
                numberOfQuestions: 1,
                testId: generatedTestId
            };

            const response = await axios.post(`${api_baseURL}/question/filterQuestion`, requestData);
            if (response.data.success) {
                const questions = response.data.data;
                setTestDetails({ card, questions, generatedTestId });
                navigate(`/Subjects/${card}`);
            } else {
                toast.error(response.data.message);
            }
        }
    };

    useEffect(() => {
        if (weakestSubject) {
            console.log("weakest subject", weakestSubject);
            setIsTimed(true);
        }
    }, [weakestSubject]);

    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>
                    <Row>
                        <Col md={4}>
                            <div className='card' onClick={() => selectCard('dailyChallenge')}>
                                <i className=''>
                                    <img src={Calicn} alt="Calendar" />
                                </i>
                                <h2>Daily Challenge</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card' onClick={() => selectCard('tutoredTest')}>
                                <i className=''>
                                    <img src={Tuttest} alt="Tutored Test" />
                                </i>
                                <h2>Tutored Test</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card blu' onClick={() => selectCard('fastFive')}>
                                <i className=''>
                                    <img src={Fastfive} alt="Fast Five" />
                                </i>
                                <h2>Fast Five</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card blu' onClick={() => selectCard('youGotThis')}>
                                <i className=''>
                                    <img src={Yougot} alt="You Got" />
                                </i>
                                <h2>You Got This</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card blu' onClick={() => selectCard('incorrectlyAnswered')}>
                                <i className=''>
                                    <img src={Incorrectans} alt="Incorrectly Answered" />
                                </i>
                                <h2>Incorrectly Answered</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card' onClick={() => selectCard('timedTest')}>
                                <i className=''>
                                    <img src={Timetest} alt="Timed Test" />
                                </i>
                                <h2>Timed Test</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card' onClick={() => selectCard('readinessTest')}>
                                <i className=''>
                                    <img src={Readytest} alt="Readiness Test" />
                                </i>
                                <h2>Readiness Test</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Modal for Weakest Subject Test */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Weakest Subject Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Subjectscomp setSelectedSubjects={setSelectedSubjects} initialSubjects={weakestSubject} weakestSubject={weakestSubject} />
                    <div className='modl-range'>
                        <h6>Number of Questions: {value}</h6>
                        <InputRange
                            maxValue={30}
                            minValue={1}
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    {/* <Form.Check
                        type='switch'
                        id='custom-switch'
                        label='Timed Test'
                        checked={isTimed}
                        onChange={() => setIsTimed(!isTimed)}
                    /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={startTest}>
                        Start Test
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Dashboard;
