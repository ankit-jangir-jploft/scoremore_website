import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Congrates from '../Components/Congrates';


const Congratulations = () => {
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
                        <Congrates/>                  
                    </Col>
                </Row>    
            </div>           
        </div>
        
            </>
              
  )
}
export default Congratulations;
