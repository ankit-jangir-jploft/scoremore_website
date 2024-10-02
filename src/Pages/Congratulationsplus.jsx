import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Confetti from "../assets/img/confetti.svg"
import { useNavigate } from 'react-router-dom';


const Congratulationsplus = () => {
    const navigate = useNavigate();
    const Billinghistory = () => {
      navigate("/Billinghistory");
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
                        <Col sm={9}>
                            <div className='cong-main'>
                                <img src={Confetti} alt="Confetti" /> 
                                <h1 className='mt-5'>Congratulations you have<br/> 
                                activated plus membership</h1>
                                <button type="submit" class="btn btn-primary px-5" onClick={Billinghistory}>Ok</button>    
                            </div>                 
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Congratulationsplus;