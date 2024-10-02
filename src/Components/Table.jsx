import React from 'react';
import { Table } from 'react-bootstrap';

const Dtable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>D</td>
                        <td>A</td>
                        <td><span className='stts-rd'>Incorrect</span></td>
                        <td><span className='time-spn'>00:15</span></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>C</td>
                        <td>A</td>
                        <td><span className='stts-rd'>Incorrect</span></td>
                        <td><span className='time-spn'>00:15</span></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>B</td>
                        <td>B</td>
                        <td><span className='stts-grn'>Correct</span></td>
                        <td><span className='time-spn'>00:15</span></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>D</td>
                        <td>D</td>
                        <td><span className='stts-grn'>Correct</span></td>
                        <td><span className='time-spn'>00:15</span></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>C</td>
                        <td>C</td>
                        <td><span className='stts-grn'>Correct</span></td>
                        <td><span className='time-spn'>00:15</span></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Dtable;
