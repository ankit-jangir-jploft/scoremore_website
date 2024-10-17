import React from 'react'; 
import Checked from "../assets/img/60-Checked.svg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const Testcompl = ({ totalQuestions, correctAnswers, resultsData, cardData }) => {
    const navigate = useNavigate();
    
    // Calculate the percentage
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    const handleViewResult = () => {
        // Use cardData.name for testName
        navigate("/Testdetails", { state: { testName: cardData,totalQuestions, resultsData } });
    };

    return (
        <div className='cong-main tst-compol'>
            <img src={Checked} alt="Checked" />
            <h1>Test Completed</h1>
            <div className='progrs-mn'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>{correctAnswers}/{totalQuestions}</span>
            </div>
            <p>Good Job! You got {correctAnswers} out of {totalQuestions} questions correct.</p>        
            <div className='cong-btn'>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={handleViewResult}
                    aria-label="View detailed results"
                >
                    View Results
                </button>
            </div>
        </div>
    );
};

export default Testcompl;
