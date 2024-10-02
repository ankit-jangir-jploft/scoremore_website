import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import Table from '../Components/Table';


const Testdetails = () => {
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
                            <div className='tst-rslt-m'>
                                <h2>Test Result</h2>
                                <div className='tst-rslt-tbl'>
                                    <div className='tst-nme'>Test Name: Fast Five</div>
                                    <Table/>
                                </div>                                
                            </div>                                       
                        </Col>
                    </Row>    
                </div>           
            </div>        
        </>
              
  )
}
export default Testdetails;
