import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import Timer from "../assets/img/timer.svg";
import Bookmark from "../assets/img/bookmark.svg";
import Settings from "../assets/img/settings.svg";
import Stopbtn from "../assets/img/stop-button.svg";
import Next from "../assets/img/next.svg";
import Pause from "../assets/img/pause.svg";
import Play from "../assets/img/play-button-arrowhead.svg";
import Feedback from "../assets/img/feedback.svg";
import Tick from "../assets/img/tick.svg";
import Removerd from "../assets/img/removerd.svg";
import { api_baseURL } from '../api/apiHelper';
import ConfirmModal from './EndTestModel';

const Test = ({ questions, userId, testId, cardData, time }) => {
    // console.log("time at test", time)
    const params = useParams();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isMarked, setIsMarked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [resultsData, setResultsData] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [timeSpent, setTimeSpent] = useState({});

    const [showExplanation, setShowExplanation] = useState(false);
    const [countdownTime, setCountdownTime] = useState(time || 15); // Initialize countdown for fastFive

    const currentQuestion = useMemo(() => questions[currentQuestionIndex], [currentQuestionIndex, questions]);
    const isLastQuestion = useMemo(() => currentQuestionIndex === questions.length - 1, [currentQuestionIndex, questions.length]);

    useEffect(() => {
        if (params.card === 'fastFive') {
            setCountdownTime(15);
        }
        if (params.card === "readinessTest") {
            setCountdownTime(7200);
        }
        if (params.card === "timedTest") {
            console.log("time time", time)
            setCountdownTime(time);  // Set countdown to start from 'time'
        }
    }, [params.card, time]);

    useEffect(() => {
        let timer;

        if (!isPaused) {
            if (params.card === 'fastFive' || params.card === "readinessTest" || params.card === "timedTest") {
                timer = setInterval(() => {
                    setCountdownTime(prev => {
                        if (prev > 1) {
                            return prev - 1;
                        } else {
                            clearInterval(timer);
                            if (currentQuestionIndex === questions.length - 1) {
                                handleEndTest();
                            } else {
                                handleNextQuestion(false, true);
                            }
                            return 0;
                        }
                    });
                }, 1000);
            } else {
                // Only update the elapsed time for other cases
                timer = setInterval(() => {
                    setElapsedTime(prev => prev + 1);
                }, 1000);
            }
        }

        return () => clearInterval(timer);
    }, [isPaused, params.card, currentQuestionIndex, questions.length]);

    useEffect(() => {
        // When changing to a new question, set elapsed time to zero
        if(params.card === "readinessTest"){
        if (currentQuestionIndex < questions.length) {
            setElapsedTime(0); // Resetting elapsed time when navigating to a new question
        }
    
        // Restore elapsed time for the current question from timeSpent
        const currentQuestionId = currentQuestion._id;
        const storedTime = timeSpent[currentQuestionId] || 0;
        setElapsedTime(storedTime);
    }
    
    }, [currentQuestionIndex, questions, timeSpent]);
    

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const resetQuestionState = useCallback(() => {
        console.log("countdown time", countdownTime);
        if (params.card !== "readinessTest") {
            setCountdownTime(countdownTime);
        }
        setIsMarked(false);
        setSelectedOption(null);
        setShowExplanation(false);
        console.log("Question state reset.");
    }, [countdownTime, params.card]);
    
    const handleNextQuestion = useCallback(async (userSelected = true, isOmitted = false) => {
        const token = localStorage.getItem('token');
        const { _id: questionId, correctOption, level } = currentQuestion;
        const isCorrect = selectedOption === correctOption;
    
        let timeTaken;
        if (params.card === 'fastFive') {
            timeTaken = formatTime(15 - countdownTime); // for fastFive mode
        } else {
            timeTaken = formatTime(elapsedTime); // for other modes
        }
    
        // Save time spent on the current question
        setTimeSpent(prev => ({
            ...prev,
            [questionId]: (prev[questionId] || 0) + elapsedTime // Increment existing time or set initial value
        }));
    
        const requestBody = {
            userId,
            questionId,
            isCorrect,
            isMarked,
            timeTaken,
            level,
            userSelectedOption: selectedOption,
            isUsed: userSelected,
            isOmitted,
            testId,
        };
    
        const resultEntry = {
            questionNumber: currentQuestionIndex + 1,
            yourAnswer: selectedOption,
            correctAnswer: correctOption,
            isCorrect,
            time: timeTaken,
        };
    
        setResultsData(prev => [...prev, resultEntry]);
    
        try {
            const response = await axios.post(`${api_baseURL}/user/userQuestionData`, requestBody, {
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                withCredentials: true,
            });
    
            if (response.data.success) {
                if (isMarked) toast.success("Your question is bookmarked");
                if (isCorrect) {
                    setCorrectAnswersCount(prev => prev + 1);
                }
    
                // Move to the next question
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                    resetQuestionState(); // Reset state for the new question
                    setElapsedTime(0); // Reset elapsed time for new question
                } else {
                    await handleEndTest([...resultsData, resultEntry]);
                }
            } else {
                toast.error("Failed to submit answer.");
            }
        } catch (error) {
            toast.error("Error submitting question data. Please try again.");
        }
    }, [currentQuestion, selectedOption, elapsedTime, isMarked, currentQuestionIndex, resultsData, countdownTime]);
    
    const handlePreviousQuestion = useCallback(() => {
        const submittedCount = resultsData.filter(result => result.isCorrect !== undefined).length;
    
        if (currentQuestionIndex > 0 && currentQuestionIndex <= submittedCount) {
            const prevIndex = currentQuestionIndex - 1;
            const previousResult = resultsData[prevIndex];
    
            resetQuestionState();
            setCurrentQuestionIndex(prevIndex);
    
            // Restore the time spent on the previous question
            const previousQuestionTime = timeSpent[previousResult.questionId] || 0; // Default to 0 if not found
            setElapsedTime(previousQuestionTime); // Set the elapsed time for the previous question
            setShowExplanation(false); // Optionally hide explanation on going back
    
            // Also set the selected option if it exists
            const previousAnswer = userAnswers[previousResult.questionId]; // Use questionId as key
            if (previousAnswer) {
                setSelectedOption(previousAnswer);
            } else {
                setSelectedOption(""); // Reset if no previous answer
            }
    
            console.log("Moved to previous question, time reset to:", previousQuestionTime);
        } else {
            toast.info("You can't move to previous questions.");
        }
    }, [currentQuestionIndex, resultsData, resetQuestionState, userAnswers, timeSpent]);
    
    
    
    
    
    
    
  
    const handlePauseResume = useCallback(() => {
        setIsPaused(prev => {
            const newState = !prev;
            console.log(newState ? "Paused the test." : "Resumed the test.");
            return newState;
        });
    }, []);

    const handleBookmark = useCallback(() => {
        setIsMarked(true);
        toast.success("Your question is bookmarked");
        console.log("Question bookmarked.");
    }, []);

    const handleOptionChange = useCallback((option) => {
        // Prevent changing answer in Daily Challenge mode
        if (params.card === 'dailyChallenge' && selectedOption !== null) {
            toast.info("You cannot change your answer in Daily Challenge.");
            return;
        }
    
        // Update selected option state
        setSelectedOption(option);
        
        // Update userAnswers to reflect the user's choice
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestion._id]: option // Assuming each question has a unique _id
        }));
    
        // Optionally show explanation after selecting an answer
        setShowExplanation(true);
    }, [params.card, selectedOption, currentQuestion._id]);
    

    const handleEndTest = async () => {
        const token = localStorage.getItem('token');
        const finalResultsData = [...resultsData];

        if (selectedOption) {
            const isCorrect = selectedOption === currentQuestion.correctOption;
            const timeTaken = formatTime(elapsedTime);
            finalResultsData.push({
                questionNumber: currentQuestionIndex + 1,
                yourAnswer: selectedOption,
                correctAnswer: currentQuestion.correctOption,
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
            testType: params.card,
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



    const handleEndClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    
    
    const handleSkipQuestion = useCallback(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            resetQuestionState();
        }
    }, [currentQuestionIndex, questions.length]);

    return (
        <div className='test-sec'>
            <div className='test-hdr'>
                <div className='tets-name'>{cardData === "readinessTest" ? "Readiness Test" : cardData === "fastFive" ? "Fast Five" : cardData === "dailyChallenge" ? "Daily Challenge" : cardData === "tutoredTest" ? "Tutored Test" : cardData === "youGotThis" ? "You Got This" : cardData === "timedTest" ? "Timed Test" : cardData === "incorrectlyAnswered" ? "Incorrectly Test" : Test}</div>
                {cardData !== "tutoredTest" && (
                    <div className='test-time'>
                        {
                            params.card === 'fastFive' || params.card === "timedTest" || params.card === "readinessTest" ? (
                                <img src={Timer} alt="Timer" />
                            ) : ""
                        }

                        {params.card === 'fastFive' || params.card === "timedTest" || params.card === "readinessTest" ? (
                            params.card === "readinessTest" ? (
                                // Show time in hh:mm:ss format for readinessTest
                                <span>Time Remaining: {formatTime(countdownTime)}</span>
                            ) : (
                                // Default case (if not readinessTest)
                                <span>Time Remaining: {countdownTime} seconds</span>
                            )
                        ) : params.card !== "incorrectlyAnswered" ? (
                            <> Time Spent {formatTime(elapsedTime)}</>
                        ) : ""}
                    </div>

                )}
                <div className='tets-stng'>
                    <Link onClick={handleBookmark}><img src={Bookmark} alt="Bookmark" /></Link>
                    <span>{currentQuestionIndex + 1}/{questions.length}</span>
                    <Link to='/'><img src={Settings} alt="Settings" /></Link>
                </div>
            </div>
            <div className='test-main'>
            {currentQuestion && (
    <div key={currentQuestion.id}>
        <p>{currentQuestion.question}</p>
        <Form>
            {currentQuestion.options.map((option) => {
                const key = Object.keys(option)[0];
                const value = option[key];
                return (
                    <Form.Check
                        key={key}
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        label={`${key}. ${value}`}
                        checked={userAnswers[currentQuestion._id] === key} // Use userAnswers for checked state
                        onChange={() => handleOptionChange(key)}
                        className={userAnswers[currentQuestion._id] ? 
                            (userAnswers[currentQuestion._id] === currentQuestion.correctOption ? 'radio-checked-correct' : 'radio-checked-incorrect')
                            : ''}
                    />
                );
            })}
        </Form>
    </div>
)}



            </div>
            <div className='test-ftr'>
                {currentQuestionIndex > 0 && cardData !== "fastFive" && (
                    <Link className='btn previous' onClick={handlePreviousQuestion}>Previous</Link>
                )}
                {/* {cardData !== "dailyChallenge" ? <div className='tets-name'>
                    <Link onClick={handleEndTest}><img src={Stopbtn} alt="Stop" /> End</Link>
                </div> : ""} */}
                {cardData !== "dailyChallenge" ? <div className='tets-name'>
                    <Link onClick={handleEndClick}><img src={Stopbtn} alt="Stop" /> End</Link>
                </div> : ""}

                <ConfirmModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleEndTest}
                />
                {
                    cardData !== "tutoredTest" && cardData !== "incorrectlyAnswered" && cardData !== "readinessTest" ?
                        <div className='test-time'>
                            <Link onClick={handlePauseResume}>
                                {isPaused ? <img src={Play} alt="Play" /> : <img src={Pause} alt="Pause" />}
                            </Link>
                        </div> : ""
                }


                {cardData !== "dailyChallenge" ? <Link className='btn skip' onClick={handleSkipQuestion}>Skip</Link> : ""}

                <div className='tets-next'>
                    <Link onClick={() => handleNextQuestion(true)} disabled={!selectedOption}>
                        {isLastQuestion ? "End Test" : "Next"} <img src={Next} alt="next" />
                    </Link>
                </div>
            </div>


            {selectedOption === currentQuestion.correctOption && selectedOption != null && cardData !== "readinessTest" && cardData !== "fastFive" ? (
                <div className='rslt-badge'>
                    <img src={Tick} alt="Nice Job" /> Nice Job
                </div>
            ) : selectedOption !== currentQuestion.correctOption && selectedOption !== null && cardData !== "readinessTest" && cardData !== "fastFive" ? (
                <div className='rslt-badge rslt-badge-rng'>
                    <img src={Removerd} alt="Incorrect" /> Incorrect<br />
                    <p>Correct Answer: {currentQuestion.correctOption}</p>
                </div>
            ) : null}
            {showExplanation && currentQuestion.explanation && selectedOption !== null && cardData !== "readinessTest" && cardData !== "fastFive" && (
                <p className="explanation">Explanation: {currentQuestion.explanation}</p>
            )}
        </div>
    );
};

export default Test;
