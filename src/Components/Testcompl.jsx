import React from 'react';
import Checked from "../assets/img/60-Checked.svg"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';



const Testcompl = () => {
    const navigate = useNavigate();
    const Testdetails = () => {
      navigate("/Testdetails");
    };
    const percentage = 78;
    
    return (
        <>
            <div className='cong-main tst-compol'>
                <img src={Checked} alt="Checked" />
                <h1>Test Completed</h1>
                    <div className='progrs-mn'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <span>35/50</span>
                    </div>
                <p>Good Job, You need to study more keep going </p>        
            </div>
            <div className='cong-btn'>
                <button type="submit" className="btn btn-primary" onClick={Testdetails}>View Result</button>
            </div>
        </>
    );
}

export default Testcompl;
