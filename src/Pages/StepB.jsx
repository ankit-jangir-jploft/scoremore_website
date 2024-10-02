import {Col, Form, FormLabel, Row} from 'react-bootstrap';
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; 
import Questions from '../Components/Questions';
import Backbt from "../assets/img/arrow-abc.svg"


export const StepB = ({setType,type}) => {
  const [value, setValue] = useState(30);
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
                    <img src={Backbt} alt="Back" className='mb-2' />
                        <Questions/>   
                        <Row>
                          <Col md={5}>
                          <Form className="form">
                            <FormLabel className='rang-lbl'>Number of questions</FormLabel>
                            <div className="input-range">
                              <InputRange
                                maxValue={100}
                                minValue={0}
                                value={value}
                                onChange={value => setValue(value)}
                                onChangeComplete={value => console.log(value)}
                              />
                            </div>
                           </Form>
                          </Col>
                          <Col md={7} className='text-end mt-4'>
                            <button type="submit" className="btn btn-primary" onClick={()=>{setType(3)}}>Start Test</button>
                          </Col>
                            </Row>                   
                    </Col>
                </Row>    
            </div>           
        </div>
    </div>
  )
}
