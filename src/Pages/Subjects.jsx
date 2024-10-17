import React, { useContext, useEffect, useState } from 'react';
import { StepA } from './StepA';
import { StepB } from './StepB';
import { StepC } from './StepC';
import { useLocation, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique test IDs
import { TestContext } from '../Components/TestContext';

const Subjects = () => {
    const { testData } = useContext(TestContext);
    console.log("testData", testData)
    const params = useParams();
    const cardData = params.card;
    const singleQuestion = testData.questions || [];
    console.log("singleQuestion singleQuestion", singleQuestion)
    const singleTestId =testData.generatedTestId;

    const [type, setType] = useState(1);
    const [selectedSubjects, setSelectedSubjects] = useState({});
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [testId, setTestId] = useState(null); // State for test ID
    const [timeLimit, setTimeLimit] = useState(null); // State for time limit

    // Modify setType to accept questions, time, and set the testId
    const handleTypeChange = (newType, questions = [], time = null) => {
        setType(newType);
        if (questions.length) {
            setFilteredQuestions(questions); // Store filtered questions when moving to StepC
        }
        if (time) {
            setTimeLimit(time); // Store the time limit if provided
        }

        // If moving to StepB, generate a new test ID
        if (newType === 2) {
            const generatedTestId = uuidv4(); // Generate a new test ID
            setTestId(generatedTestId); // Store the test ID
        }

        // If moving to StepC, generate a new test ID if it was not set before
        if (newType === 3) {
            if (!testId) { // Check if testId is not already set
                const generatedTestId = uuidv4(); // Generate a new test ID
                setTestId(generatedTestId); // Store the test ID
            }
        }
    };

    // Automatically transition to StepC if there are preloaded questions (e.g., Daily Challenge)
    useEffect(() => {
        if (singleQuestion.length > 0 && cardData === "dailyChallenge") {
            setType(3); // Automatically go to StepC if questions are available and it's a Daily Challenge
        } 
        
        if ( singleQuestion.length > 0 && cardData === "youGotThis" ) {
            console.log("it hits yougot")
            setType(3);
        }
        if (singleQuestion.length > 0 && cardData  === "readinessTest") {
            setType(3);
        }
    }, [singleQuestion, cardData]);

    const handleBackToStepA = () => {
        setType(1); // Set type to 1 to go back to StepA
    };

    // useEffect(() => {
    //     if (cardData === "youGotThis") {
    //         if (filteredQuestions.length === 0) {
    //             console.log("it hitsyouGotThis")
    //             // If no questions are available for "youGotThis", display the message
    //             setFilteredQuestions([]); // Ensure filteredQuestions is empty for "youGotThis"
    //         } else {
    //             setType(3); // Go to StepC if there are questions
    //         }
    //     }
    // }, [cardData, filteredQuestions]);

    // Function to start the test
    const startTest = () => {
        if (filteredQuestions.length > 0) {

            setType(3); // Change type to 3 to show StepC
        } else {
            alert("No questions available for the selected criteria."); // Alert if no questions are available
        }
    };

    // Render the appropriate step based on the current type
    switch (type) {
        case 1:
            return (
                <StepA
                    setType={handleTypeChange}
                    cardData={cardData}
                    setSelectedSubjects={setSelectedSubjects}
                    onStartTest={startTest} // Pass the start test function to StepA
                />
            );
        case 2:
            return (
                <StepB
                    setType={handleTypeChange}
                    cardData={cardData}
                    selectedSubjects={selectedSubjects}
                    testId={testId}
                    onBack={handleBackToStepA} // Pass testId to StepB
                />
            );
        case 3:
            return (
                <StepC
                    setType={handleTypeChange}
                    cardData={cardData}
                    questions={cardData === "dailyChallenge" ? singleQuestion : cardData === "youGotThis" ? singleQuestion : cardData === "readinessTest" ? singleQuestion  : filteredQuestions}
                    testId={cardData === "dailyChallenge" ? singleTestId : cardData === "youGotThis"? singleTestId : cardData === "readinessTest" ? singleTestId : testId} // Pass testId to StepC
                    time={timeLimit} // Pass time limit to StepC
                />
            );
        default:
            return <div>No Component Found</div>;
    }
};

export default Subjects;
