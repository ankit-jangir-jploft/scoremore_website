import React from 'react';
import Crown from "../assets/img/king.svg"
import { Link, useNavigate } from 'react-router-dom';



const Congrates = () => {
    const navigate = useNavigate();
  const Subjects = () => {
    navigate("/Subjects");
  };
    return (
        <>
            <div className='cong-main'>
                <h1>Congratulations you just unlocked<br/>
                the following achievement.</h1>
                <img src={Crown} alt="Crown" />         
                <span>Perfect round.</span>        
                <p>Streak - 5 in a row.</p>        
            </div>
            <div className='cong-btn'>
                <button type="submit" class="btn btn-secondary" onClick={Subjects}>End Test</button>
                <button type="submit" class="btn btn-primary">Keep Going</button>
            </div>
            <Link className='cong-a' to='/'>View Details</Link>
        </>
    );
}

export default Congrates;
