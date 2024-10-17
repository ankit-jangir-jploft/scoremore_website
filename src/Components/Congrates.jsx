import React, { useState } from 'react';
import Crown from "../assets/img/king.svg";
import Testcompl from './Testcompl'; 
import { Link, useNavigate } from 'react-router-dom';

const Congrates = ({ correctAnswers, totalQuestions, resultsData, cardData }) => {
    console.log("card data in congrets", cardData);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleEndTest = (event) => {
        event.preventDefault(); // Prevent default Link navigation
        setShowResults(true); // Trigger showing results
    };

    if (showResults) {
        return (
            <Testcompl 
                totalQuestions={totalQuestions} 
                correctAnswers={correctAnswers} 
                resultsData={resultsData} 
                cardData={cardData} // Pass cardData here
            />
        );
    }

    return (
        <>
            <div className='cong-main'>
                <h1>Congratulations! You just unlocked<br />
                    the following achievement.
                </h1>
                <img src={Crown} alt="Crown" />
                <span>Perfect round.</span>
                <p>Streak - 5 in a row.</p>
            </div>
            <div className='cong-btn'>
                {/* Use onClick with preventDefault to keep styling and trigger functionality */}
                <Link to="/" onClick={handleEndTest}>View Results</Link>
                <Link to='/'>Back to Home</Link>
            </div>
        </>
    );
};

export default Congrates;
