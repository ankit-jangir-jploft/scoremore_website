import React, { useEffect, useState } from 'react';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import Test from '../Components/Test';
import ErrorBoundary from '../Components/ErrorBoundary';
import { toast } from 'react-toastify';
import { api_baseURL } from '../api/apiHelper';

export const StepC = ({ setType, cardData, questions, testId, time }) => {
    console.log("time at c", time)
    const [showConfirm, setShowConfirm] = useState(false);
    const [resultsData, setResultsData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null); // State for selected answer
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const handleEndTest = async () => {
        const token = localStorage.getItem('token');
        const finalResultsData = [...resultsData];

        if (selectedOption) {
            const isCorrect = selectedOption === questions[currentQuestionIndex].correctOption;
            const timeTaken = formatTime(elapsedTime);
            finalResultsData.push({
                questionNumber: currentQuestionIndex + 1,
                yourAnswer: selectedOption,
                correctAnswer: questions[currentQuestionIndex].correctOption,
                isCorrect,
                time: timeTaken,
            });
        }

        const totalNoOfQuestion = questions.length;
        const totalCorrect = finalResultsData.filter(result => result.isCorrect).length;
        const totalIncorrect = finalResultsData.length - totalCorrect;
        const totalAttemptedQuestions = finalResultsData.length;

        const testResultBody = {
            userId,
            testId,
            testType: cardData.card, // Assuming cardData.card is the test type
        };

        console.log("Submitting test results:", testResultBody);

        try {
            const response = await axios.post(`${api_baseURL}/user/submitTestResult`, testResultBody, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            console.log("API Response for submitTestResult:", response.data);

            if (response.data.success) {
                navigate('/Congratulations', {
                    state: {
                        testId,
                        correctAnswers: totalCorrect,
                        totalQuestions: totalNoOfQuestion,
                        resultsData: finalResultsData,
                    },
                });
            } else {
                toast.error("Failed to submit test results.");
            }
        } catch (error) {
            console.error("Error submitting test results", error);
            toast.error("Error submitting test results. Please try again.");
        }
    };

    // useEffect(()=> {
    //     setShowConfirm(true);
    // })

    const handleReload = () => {
        setShowConfirm(true); // Show the confirmation modal
    };

    const handleConfirmReload = () => {
        handleEndTest(); // Call the function to submit test results
        window.location.reload(); // Reload the page
    };

    const handleCancelReload = () => {
        setShowConfirm(false); // Close the confirmation modal
    };

    return (
        <div>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={9}>
                            {questions && questions.length > 0 ? (
                                <ErrorBoundary>
                                    <Test 
                                        questions={questions} 
                                        userId={userId} 
                                        testId={testId} 
                                        cardData={cardData} 
                                        time={time} 
                                        onEndTest={handleReload} // Pass the function to show the confirmation modal
                                    />
                                </ErrorBoundary>
                            ) : (
                                <div className="alert alert-warning">No questions available for the selected criteria.</div>
                            )}
                        </Col>
                    </Row>    
                </div>           
            </div>

            {/* Confirmation Modal */}
            <Modal show={showConfirm} onHide={handleCancelReload}>
                <Modal.Header closeButton>
                    <Modal.Title>End Test Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to end the test? Your progress will be lost.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelReload}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmReload}>
                        End Test
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
