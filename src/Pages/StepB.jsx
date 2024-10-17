import { Col, Form, FormLabel, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Questions from '../Components/Questions';
import Backbt from "../assets/img/arrow-abc.svg";
import axios from 'axios';
import { api_baseURL } from '../api/apiHelper';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Test from '../Components/Test';
import ErrorBoundary from '../Components/ErrorBoundary';

export const StepB = ({ setType, cardData, testId, selectedSubjects, onBack }) => {
    console.log("stepB hits")
    console.log("testId in StepB", testId); // Log the testId for debugging
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId")
    const [value, setValue] = useState(60); // For number of questions
    const [time, setTime] = useState(30); // For time selection in seconds
    const [toggles, setToggles] = useState({
        all: true,
        unused: false,
        incorrect: false,
        marked: false,
        omitted: false
    });
    const [loading, setLoading] = useState(false);
    const [filteredQuestions, setFilteredQuestions] = useState([]);

    // Handle toggle state for question type filters
    const handleToggle = (toggleName, value) => {
        if (value !== undefined) {
            setToggles((prev) => ({
                ...prev,
                [toggleName]: value
            }));
        } else {
            setToggles((prev) => ({
                ...prev,
                [toggleName]: !prev[toggleName]
            }));
        }
    };

    // Start the test and fetch filtered questions
    const handleStartTest = async () => {
        setLoading(true); // Start loading before the API call

        try {
            const userId = localStorage.getItem("userId");

            // Prepare request data
            const requestData = {
                userId,
                cardType: cardData,
                subjects: selectedSubjects,
                questionType: {
                    ...toggles,
                    incorrect: cardData === 'incorrectlyAnswered' ? true : toggles.incorrect
                },
                numberOfQuestions: cardData === 'fastFive' ? 5 : value,
                timeLimit: cardData === 'timedTest' ? time : undefined, // Send time limit only if card type is timedTest
                testId: testId // Include testId in the request
            };

            // Make API call to filter questions
            const response = await axios.post(`${api_baseURL}/question/filterQuestion`, requestData);

            if (response.data.success) {
                const questions = response.data.data;
                setFilteredQuestions(questions);
                // Pass the time limit from response.data to StepC via setType
                setType(3, questions, response.data.timeLimit); // Add response.data.timeLimit here
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error fetching questions");
        } finally {
            setLoading(false); // Stop loading after API call completes
        }
    };

    const handleBackClick = async () => {
        debugger
        onBack();
    }

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
                        <img
                                src={Backbt}
                                alt="Back"
                                className='mb-2'
                                onClick={handleBackClick} // Handle back navigation on click
                                style={{ cursor: 'pointer' }} // Optional: add cursor pointer for better UX
                            />
                            <Questions
                                toggles={toggles}
                                handleToggle={handleToggle}
                                questionRange={value}
                                filteredQuestions={filteredQuestions}
                                cardType={cardData}
                            />

                            <Row>
                                {cardData === 'timedTest' && ( // Render time selection if cardData is timedTest
                                    <Col md={5}>
                                        <Form className="form">
                                            <FormLabel className='rang-lbl'>Time Limit (seconds per question)</FormLabel>
                                            <div className="input-range">
                                                <InputRange
                                                    maxValue={300} // Set the maximum time limit as needed (5 minutes = 300 seconds)
                                                    minValue={30} // Minimum time limit (30 seconds)
                                                    step={30} // Increment by 30 seconds
                                                    value={time}
                                                    onChange={setTime} // Update time value
                                                />
                                            </div>
                                        </Form>
                                    </Col>
                                )}
                                {cardData !== 'fastFive' && ( // Render question selection range
                                    <Col md={5}>
                                        <Form className="form">
                                            <FormLabel className='rang-lbl'>Number of questions</FormLabel>
                                            <div className="input-range">
                                                <InputRange
                                                    maxValue={100}
                                                    minValue={0}
                                                    value={value}
                                                    onChange={setValue}
                                                />
                                            </div>
                                        </Form>
                                    </Col>
                                )}
                                <Col md={7} className='text-end mt-4'>
                                    <button type="button" className="btn btn-primary" onClick={handleStartTest} disabled={loading}>
                                        {loading ? 'Loading...' : 'Start Test'}
                                    </button>
                                </Col>
                            </Row>
                            {filteredQuestions.length > 0 && testId && (
                                <ErrorBoundary>
                                    <Test
                                        questions={filteredQuestions}
                                        userId={userId}
                                        testId={testId}
                                        timer={time} // Pass the selected time per question
                                        cardType={cardData} // Pass cardType to determine timer behavior
                                    />
                                </ErrorBoundary>
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
