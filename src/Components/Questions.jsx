import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Unused from "../assets/img/question.svg";
import Incorrect from "../assets/img/incorrect.svg";
import Marked from "../assets/img/check-mark.svg";
import Omitted from "../assets/img/forbidden.svg";

const Questions = ({ toggles, handleToggle, questionRange, cardType, filteredQuestions }) => {
    const [allChecked, setAllChecked] = useState(true); // By default, all toggles are checked
    const isIncorrectlyAnswered = cardType === 'incorrectlyAnswered';

    // Sync the "All" toggle based on individual toggles
    useEffect(() => {
        // If all individual toggles are true, set "All" toggle to true
        const allTogglesChecked = toggles.unused && toggles.incorrect && toggles.marked && toggles.omitted;
        setAllChecked(allTogglesChecked); // Update the "allChecked" state
    }, [toggles]);

    // Handle individual toggle changes
    const handleToggleChange = (type) => {
        if (type !== 'all') {
            // Uncheck "All" if any individual toggle is changed
            handleToggle('all', false);
        }
        handleToggle(type, !toggles[type]);
    };

    // Handle toggling "All"
    const handleAllToggle = () => {
        const newAllChecked = !allChecked; // Toggle the "All" state
        setAllChecked(newAllChecked);

        // Set all individual toggles based on the "All" toggle's new state
        handleToggle('unused', newAllChecked);
        handleToggle('incorrect', newAllChecked);
        handleToggle('marked', newAllChecked);
        handleToggle('omitted', newAllChecked);
    };

    return (
        <div className='tbs-cnart'>
            <h3>Questions 
                <Form className='d-flex justify-content-end align-items-center'>
                    <span>All</span>
                    <Form.Check 
                        type="switch" 
                        id="all-questions-switch" 
                        label="" 
                        checked={allChecked} // Controlled by `allChecked`
                        onChange={handleAllToggle} // Call handler to toggle all
                        disabled={isIncorrectlyAnswered} // Disable if cardType is incorrectlyAnswered
                    />
                </Form>
            </h3>
            {/* Display question range if provided */}
            {/* <div className='question-range'>
                {questionRange && <p>Displaying questions for range: {questionRange}</p>}
            </div> */}
            {/* Map over filteredQuestions if available */}
            <div className='question-list'>{
                    filteredQuestions.map((question, index) => (
                        <div key={index} className='question-item'>
                            <p>{question.text}</p>
                        </div>
                    ))
                }
               
            </div>
            <div className='toggle-bg'>
                <div className=''>
                    <img src={Unused} alt="Unused Questions" /> Unused
                </div>
                <Form>
                    <Form.Check 
                        type="switch" 
                        id="unused-switch" 
                        label="" 
                        checked={isIncorrectlyAnswered ? false : toggles.unused} 
                        onChange={() => handleToggleChange('unused')}
                        disabled={isIncorrectlyAnswered} // Disable if cardType is incorrectlyAnswered
                    />
                </Form>                                 
            </div>
            <div className='toggle-bg'>
                <div className=''>
                    <img src={Incorrect} alt="Incorrect" /> Incorrect
                </div>
                <Form>
                    <Form.Check 
                        type="switch" 
                        id="incorrect-switch" 
                        label="" 
                        checked={isIncorrectlyAnswered || toggles.incorrect} // If incorrectlyAnswered is true, always checked
                        onChange={() => handleToggleChange('incorrect')}
                        disabled={isIncorrectlyAnswered} // Disable if cardType is incorrectlyAnswered
                    />
                </Form>                                 
            </div>
            <div className='toggle-bg'>
                <div className=''>
                    <img src={Marked} alt="Marked" /> Marked
                </div>
                <Form>
                    <Form.Check 
                        type="switch" 
                        id="marked-switch" 
                        label="" 
                        checked={isIncorrectlyAnswered ? false : toggles.marked} 
                        onChange={() => handleToggleChange('marked')}
                        disabled={isIncorrectlyAnswered} // Disable if cardType is incorrectlyAnswered
                    />
                </Form>                                 
            </div>
            <div className='toggle-bg'>
                <div className=''>
                    <img src={Omitted} alt="Omitted" /> Omitted
                </div>
                <Form>
                    <Form.Check 
                        type="switch" 
                        id="omitted-switch" 
                        label="" 
                        checked={isIncorrectlyAnswered ? false : toggles.omitted} 
                        onChange={() => handleToggleChange('omitted')}
                        disabled={isIncorrectlyAnswered} // Disable if cardType is incorrectlyAnswered
                    />
                </Form>                                 
            </div>                         
        </div>
    );
};

export default Questions;
