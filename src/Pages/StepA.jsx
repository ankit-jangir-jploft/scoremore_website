import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Subjectscomp from '../Components/Subjectscomp';


export const StepA = ({setType,type}) => {
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
                        <Subjectscomp/>   
                        <Row>
                                <Col md={12} className='text-end'>
                                    <button type="submit" className="btn btn-primary" onClick={()=>{setType(2)}}>Next</button>
                                </Col>
                            </Row>                     
                    </Col>
                </Row>    
            </div>           
        </div>
        
            </>
              
  )
}
