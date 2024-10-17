import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Medical from "../assets/img/star.svg";
import Lungs from "../assets/img/lungs.svg";
import Heart from "../assets/img/heart.svg";
import Trauma from "../assets/img/trauma.svg";
import Emsoperations from "../assets/img/emergency-services.svg";

const Subjectscomp = ({ setSelectedSubjects, initialSubjects, weakestSubject }) => {
    console.log("weakest subject in subjectcompo", weakestSubject);

    // Initialize state for selected subjects, initially all selected
    const [selected, setSelected] = useState({
        medical: true,
        airway: true,
        cardiology: true,
        trauma: true,
        emsOperations: true
    });

    // Update selected state when initialSubjects prop changes
    useEffect(() => {
        if (initialSubjects) {
            setSelected(initialSubjects);
        }
    }, [initialSubjects]);

    // Handle weakest subject selection (now weakestSubject is an array)
    useEffect(() => {
        if (weakestSubject && weakestSubject.length > 0) {
            const updatedSelection = {
                medical: weakestSubject.includes('medical'),
                airway: weakestSubject.includes('airway'),
                cardiology: weakestSubject.includes('cardiology'),
                trauma: weakestSubject.includes('trauma'),
                emsOperations: weakestSubject.includes('emsOperations'),
            };
            setSelected(updatedSelection);
            setSelectedSubjects(updatedSelection);
        }
    }, [weakestSubject, setSelectedSubjects]);

    // Function to handle the toggle of the "Select All" switch
    const handleSelectAll = (isChecked) => {
        const updatedSelected = {
            medical: isChecked,
            airway: isChecked,
            cardiology: isChecked,
            trauma: isChecked,
            emsOperations: isChecked
        };
        setSelected(updatedSelected);
        setSelectedSubjects(updatedSelected);
    };

    // Handle individual switch changes
    const handleToggle = (subject) => {
        setSelected((prev) => {
            const newSelected = { ...prev, [subject]: !prev[subject] };
            setSelectedSubjects(newSelected);
            return newSelected;
        });
    };

    // Check if all subjects are selected for the "Select All" switch
    const allSelected = Object.values(selected).every(Boolean);

    // Determine if other toggles should be disabled
    const otherTogglesDisabled = weakestSubject && weakestSubject.length > 0;

    return (
        <div className='tbs-cnart'>
            {
                weakestSubject && weakestSubject.length > 0 ? "" : (
                    <h3>
                        Subjects
                        <Form>
                            <span>All</span>
                            <Form.Check
                                type="switch"
                                id="select-all-switch"
                                checked={allSelected}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                                className="me-2"
                            />
                        </Form>
                    </h3>
                )
            }

            {Object.entries(selected).map(([subject]) => (
                <div key={subject} className='toggle-bg'>
                    <div>
                        <img src={getImage(subject)} alt={subject} /> {capitalizeFirstLetter(subject)}
                    </div>
                    <Form>
                        <Form.Check
                            type="switch"
                            id={subject}
                            label=""
                            checked={selected[subject]}
                            onChange={() => handleToggle(subject)}
                            disabled={otherTogglesDisabled && !weakestSubject.includes(subject)} // Disable other toggles if not in weakest subjects
                        />
                    </Form>
                </div>
            ))}
        </div>
    );
};

// Helper function to get the image source based on the subject
const getImage = (subject) => {
    switch (subject) {
        case 'medical': return Medical;
        case 'airway': return Lungs;
        case 'cardiology': return Heart;
        case 'trauma': return Trauma;
        case 'emsOperations': return Emsoperations;
        default: return null;
    }
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Subjectscomp;
