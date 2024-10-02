import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Test from '../Components/Test';


export const StepC = ({setType,type}) => {
  return (
    <div>
         <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9}>
                        <Test/>                       
                    </Col>
                </Row>    
            </div>           
        </div>
        {/* <button className="comn-btn rounded w-100 py-3" onClick={()=>{setType(4)}}>Next</button>  */}
    </div>
  )
}
