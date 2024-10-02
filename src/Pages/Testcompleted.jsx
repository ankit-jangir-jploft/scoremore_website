import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Testcompl from '../Components/Testcompl';


const Testcompleted = () => {
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
                        <Testcompl/>                  
                    </Col>
                </Row>    
            </div>           
        </div>
        
            </>
              
  )
}
export default Testcompleted;
