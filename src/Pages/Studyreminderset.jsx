import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';


const Studyreminderset = () => {
    const navigate = useNavigate();
    const Studyreminders = () => {
      navigate("/Studyreminders");
    };
   // Initialize with the current time
  const now = new Date();
  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());

  useEffect(() => {
    // Update the inputs with the current time when the component mounts
    setHours(now.getHours());
    setMinutes(now.getMinutes());
  }, []);

  // Handle input changes
  const handleHoursChange = (event) => {
    const value = Math.max(0, Math.min(23, Number(event.target.value)));
    setHours(value);
  };

  const handleMinutesChange = (event) => {
    const value = Math.max(0, Math.min(59, Number(event.target.value)));
    setMinutes(value);
  };

    return (
        <>
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='rev-rslt stdy-rmndr-st'>
                        <div className='cong-main'>
                            <h1>What time works best to remind you to work <br/>toward your goal?</h1>   
                            <ul>
                                <li>Morning</li>
                                <li className='active'>Afternoon</li>
                                <li>Night</li>
                            </ul>
                            <div className='time-wtch'>
                                <label>                                
                                    <input
                                        type="text"
                                        value={hours}
                                        onChange={handleHoursChange}
                                        min="0"
                                        max="23"
                                        // style={{ width: '50px', margin: '0 10px' }}
                                    />
                                    Hours
                                </label>
                                :
                                <label>                                
                                    <input
                                        type="text"
                                        value={minutes}
                                        onChange={handleMinutesChange}
                                        min="0"
                                        max="59"
                                        // style={{ width: '50px', margin: '0 10px' }}
                                    />
                                    Minutes
                                </label>
                            </div>

                        </div>
                        <div className='cong-btn'>
                            <button type="submit" className="btn btn-primary" onClick={Studyreminders}>Continue</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    );
}

export default Studyreminderset;
