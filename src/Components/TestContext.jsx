import React, { createContext, useState } from 'react';

// Create the context
export const TestContext = createContext();

// Create a provider component
export const TestProvider = ({ children }) => {
    const [testData, setTestData] = useState({}); // State to hold shared test data

    const setTestDetails = (details) => {
        setTestData(details);
    };

    return (
        <TestContext.Provider value={{ testData, setTestDetails }}>
            {children}
        </TestContext.Provider>
    );
};
