import React from 'react';
import { Table } from 'react-bootstrap';

const Dtable = ({ results, totalQuestions }) => {
    console.log("result in table",totalQuestions, results); // For debugging

    // Create an array to hold all results
    const allResults = Array.from({ length: totalQuestions }, (_, index) => {
        const result = results.find(r => r.questionNumber === index + 1);
        if (result) {
            return result; // Return existing result
        } else {
            // Default values for unanswered questions
            return {
                questionNumber: index + 1,
                yourAnswer: '-', // Default for unanswered questions
                correctAnswer: '-', // Default for unanswered questions
                isCorrect: false, // Default status for unanswered questions
                time: '-', // Default for unanswered questions
            };
        }
    });

    return (
        <div className='tble-otr'>
            <Table striped>
                <thead>
                    <tr>
                        <th>Q.</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                        <th>Status</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {allResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.questionNumber}</td>
                            <td>{result.yourAnswer}</td>
                            <td>{result.correctAnswer}</td>
                            <td>
                                <span className={result.isCorrect ? 'stts-grn' : 'stts-rd'}>
                                    {result.isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                            </td>
                            <td>
                                <span className='time-spn'>{result.time}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Dtable;
