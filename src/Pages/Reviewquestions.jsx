import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row, Tab, Tabs } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Remove from "../assets/img/remove.svg";
import Ticksml from "../assets/img/ticksml.svg";
import { api_baseURL } from '../api/apiHelper';
import axios from 'axios';

const Reviewquestions = () => {
    const [key, setKey] = useState('all'); // State to track which tab is selected (all, marked, etc.)
    const [questions, setQuestions] = useState([]); // State to hold questions data
    const [filteredQuestions, setFilteredQuestions] = useState([]); // State for filtered questions
    const testId = window.location.pathname.split('/').pop(); // Extracting testId from the URL
    const userId = localStorage.getItem('userId'); // Retrieve userId from local storage

    useEffect(() => {
        const fetchExamRecord = async () => {
            try {
                const response = await axios.post(`${api_baseURL}/exam/examRecord`, {
                    userId,
                    testId,
                    filter: key, // Passing the current filter (tab state) to the backend
                });

                console.log("response.data", response.data);
                if (response.data.success) {
                    setQuestions(response.data.data[0].questions); // Set questions based on filter
                }
            } catch (error) {
                console.error('Error fetching exam record:', error);
            }
        };

        fetchExamRecord();
    }, [userId, testId, key]); // Re-fetch data when the selected tab changes

    useEffect(() => {
        // Filter questions based on the current tab key
        if (key === 'all') {
            setFilteredQuestions(questions);
        } else if (key === 'correct') {
            setFilteredQuestions(questions.filter(question => question.isCorrect));
        } else if (key === 'incorrect') {
            setFilteredQuestions(questions.filter(question => !question.isCorrect && question.userSelectedOption !== null));
        } else if (key === 'marked') {
            setFilteredQuestions(questions.filter(question => question.isMarked));
        } else if (key === 'skipped') {
            setFilteredQuestions(questions.filter(question => question.userSelectedOption === null)); // Skipped questions
        }
    }, [key, questions]); // Update filtered questions when key or questions change

    const getOptionClass = (isUserSelected, isCorrect, isSkipped, isMarked) => {
        if (isUserSelected && !isCorrect) return 'wrng'; // Wrong answer selected
        if (isCorrect) return 'correct'; // Correct answer
        if (isSkipped) return 'skipped'; 
        if (isMarked) return 'marked'; // Question marked
        return ''; // Default case
    };

    return (
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9} className='rev-rslt'>
                        <h2>Review Questions</h2>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)} // Update the selected tab (filter)
                            className="mb-3"
                        >
                            <Tab eventKey="all" title="All">
                                <Accordion defaultActiveKey="0">
                                    {filteredQuestions.map((question, index) => (
                                        <Accordion.Item eventKey={index.toString()} key={question.questionId}>
                                            <Accordion.Header>
                                                <p>{question.questionId}</p>
                                                <p>{question.subject}</p>
                                                <p>
                                                    <span className={question.isCorrect ? 'badge-grn' : question.userSelectedOption === null ? 'badge-gray' : question.isMarked ? 'badge-yel': 'badge-red'}>
                                                        {question.isCorrect ? 'Correct' : question.userSelectedOption === null ? 'Skipped' : question.isMarked ? 'Marked' : 'Incorrect'}
                                                    </span>
                                                </p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p><strong>Question:</strong> {question.question}</p>
                                                <ul>
                                                    {question.options.map((option, optionIndex) => {
                                                        const key = Object.keys(option)[0];
                                                        const isUserSelected = question.userSelectedOption === key;
                                                        const isCorrect = key === question.correctOption;
                                                        const isSkipped = question.userSelectedOption === null;

                                                        const optionClass = getOptionClass(isUserSelected, isCorrect, isSkipped);

                                                        return (
                                                            <li key={optionIndex} className={optionClass}>
                                                                {isUserSelected && isCorrect ? (
                                                                    <img src={Ticksml} alt="Right" />
                                                                ) : !isCorrect && !isSkipped ? (
                                                                    <img src={Remove} alt="Wrong" />
                                                                ) : null}
                                                                {`${key.toUpperCase()}. ${option[key]}`}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <p className='explanations'><strong>Explanation:</strong> {question.explanation}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Tab>
                            <Tab eventKey="incorrect" title="Incorrect">
                                <Accordion defaultActiveKey="0">
                                    {filteredQuestions.map((question, index) => (
                                        !question.isCorrect && question.userSelectedOption !== null && (
                                            <Accordion.Item eventKey={index.toString()} key={question.questionId}>
                                                <Accordion.Header>
                                                    <p>{question.questionId}</p>
                                                    <p>{question.subject}</p>
                                                    <p>
                                                        <span className='badge-red'>Incorrect</span>
                                                    </p>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p><strong>Question:</strong> {question.question}</p>
                                                    <ul>
                                                        {question.options.map((option, optionIndex) => {
                                                            const key = Object.keys(option)[0];
                                                            const isUserSelected = question.userSelectedOption === key;
                                                            const isCorrect = key === question.correctOption;

                                                            const optionClass = getOptionClass(isUserSelected, isCorrect, false); // isSkipped is false

                                                            return (
                                                                <li key={optionIndex} className={optionClass}>
                                                                    {isUserSelected && isCorrect ? (
                                                                        <img src={Ticksml} alt="Right" />
                                                                    ) : !isCorrect ? (
                                                                        <img src={Remove} alt="Wrong" />
                                                                    ) : null}
                                                                    {`${key.toUpperCase()}. ${option[key]}`}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <p className='explanations'><strong>Explanation:</strong> {question.explanation}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    ))}
                                </Accordion>
                            </Tab>
                            <Tab eventKey="correct" title="Correct">
                                <Accordion defaultActiveKey="0">
                                    {filteredQuestions.map((question, index) => (
                                        question.isCorrect && (
                                            <Accordion.Item eventKey={index.toString()} key={question.questionId}>
                                                <Accordion.Header>
                                                    <p>{question.questionId}</p>
                                                    <p>{question.subject}</p>
                                                    <p>
                                                        <span className='badge-grn'>Correct</span>
                                                    </p>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p><strong>Question:</strong> {question.question}</p>
                                                    <ul>
                                                        {question.options.map((option, optionIndex) => {
                                                            const key = Object.keys(option)[0];
                                                            const isUserSelected = question.userSelectedOption === key;
                                                            const isCorrect = key === question.correctOption;

                                                            const optionClass = getOptionClass(isUserSelected, isCorrect, false); // isSkipped is false

                                                            return (
                                                                <li key={optionIndex} className={optionClass}>
                                                                    {isUserSelected && isCorrect ? (
                                                                        <img src={Ticksml} alt="Right" />
                                                                    ) : !isCorrect ? (
                                                                        <img src={Remove} alt="Wrong" />
                                                                    ) : null}
                                                                    {`${key.toUpperCase()}. ${option[key]}`}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <p className='explanations'><strong>Explanation:</strong> {question.explanation}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    ))}
                                </Accordion>
                            </Tab>
                            <Tab eventKey="marked" title="Marked">
                                <Accordion defaultActiveKey="0">
                                    {filteredQuestions.map((question, index) => (
                                        question.isMarked && (
                                            <Accordion.Item eventKey={index.toString()} key={question.questionId}>
                                                <Accordion.Header>
                                                    <p>{question.questionId}</p>
                                                    <p>{question.subject}</p>
                                                    <p>
                                                    <span className='badge-yel'>Marked</span>
                                                    </p>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p><strong>Question:</strong> {question.question}</p>
                                                    <ul>
                                                        {question.options.map((option, optionIndex) => {
                                                            const key = Object.keys(option)[0];
                                                            const isUserSelected = question.userSelectedOption === key;
                                                            const isCorrect = key === question.correctOption;

                                                            const optionClass = getOptionClass(isUserSelected, isCorrect, false); // isSkipped is false

                                                            return (
                                                                <li key={optionIndex} className={optionClass}>
                                                                    {isUserSelected && isCorrect ? (
                                                                        <img src={Ticksml} alt="Right" />
                                                                    ) : !isCorrect ? (
                                                                        <img src={Remove} alt="Wrong" />
                                                                    ) : null}
                                                                    {`${key.toUpperCase()}. ${option[key]}`}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <p className='explanations'><strong>Explanation:</strong> {question.explanation}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    ))}
                                </Accordion>
                            </Tab>
                            <Tab eventKey="skipped" title="Skipped">
                                <Accordion defaultActiveKey="0">
                                    {filteredQuestions.map((question, index) => (
                                        question.userSelectedOption === null && (
                                            <Accordion.Item eventKey={index.toString()} key={question.questionId}>
                                                <Accordion.Header>
                                                    <p>{question.questionId}</p>
                                                    <p>{question.subject}</p>
                                                    <p>
                                                        <span className='badge-gray'>Skipped</span>
                                                    </p>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p><strong>Question:</strong> {question.question}</p>
                                                    <ul>
                                                        {question.options.map((option, optionIndex) => {
                                                             const key = Object.keys(option)[0];
                                                             const isUserSelected = question.userSelectedOption === key;
                                                             const isCorrect = key === question.correctOption;
                                                           

                                                            const optionClass = getOptionClass(false, false, true); // Only the skipped state is true

                                                            return (
                                                                <li key={optionIndex} className={optionClass}>
                                                                { isCorrect ? (
                                                                    <img src={Ticksml} alt="Right" />
                                                                ) : null}
                                                                {`${key.toUpperCase()}. ${option[key]}`}
                                                            </li>
                                                            );
                                                        })}
                                                    </ul>
                                                    <p className='explanations'><strong>Explanation:</strong> {question.explanation}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    ))}
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Reviewquestions;
