import React from 'react';
import Crown from "../assets/img/crt-prfl.svg"
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';


const Createprofile = () => {
    return (
        <>
        <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='rev-rslt crt-prfl'>
                        <div className='cong-main '>
                            <h1>Time to create a profile!</h1>                                
                            <p>Create a profile to save your progress and<br/>
                            continue learning for free.</p>   
                            <img src={Crown} alt="Crown" />     
                        </div>
                        <div className='cong-btn'>
                            <button type="submit" class="btn btn-primary">Continue</button>
                        </div>
                        <Link className='cong-a' to='/'>Later</Link>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    );
}

export default Createprofile;
