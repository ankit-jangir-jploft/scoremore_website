
import TimePicker from 'react-time-picker';
import {Button, Card, Col, Form, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import Allday from "../assets/img/cal-reminder.svg";
import Time from "../assets/img/timere.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Reminder = () => {
    const navigate = useNavigate();
    const Studyreminderset = () => {
      navigate("/Studyreminderset");
    };
    const [value] = useState('10:00');
    return (
            <>
            <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='rev-rslt hlp-faq rmndar'>
                        <h2>Reminder</h2>
                        <Row>
                                    <Col md={6}>
                                    <Calendar/>
                                    </Col>
                                    <Col md={6}>
                                        <Form className='help-frm'>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Remind me of..." />
                                            </Form.Group>
                                        </Form>
                                        <Card>
                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    <img src={Allday} alt="Allday" /> All-day
                                                </div>
                                                <Form>
                                                    <Form.Check type="switch" id="custom-switch" label=""/>
                                                </Form>
                                            </div>
                                            <hr/>
                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    <img src={Time} alt="Time" /> Time
                                                </div>
                                                <Form>
                                                    <TimePicker value={value} />
                                                </Form>
                                            </div>
                                        </Card>
                                        <Button type="submit" className='btn-primary py-3 d-block w-100' onClick={Studyreminderset}>Save</Button>
                                    </Col>
                        </Row>                                          
                    </Col>
                </Row>    
            </div>           
        </div>        
            </>
              
  )
}
export default Reminder;
