import {Card, Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Notificn from "../assets/img/notif-icn.svg";


const Studyreminders = () => {
    return (
            <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con stdy-remn'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar/>
                        </Col>  
                        <Col sm={9} className='rev-rslt my-acnt'>
                            <h2>Study Reminders</h2>       
                            <Card>
                                <img src={Notificn} alt="Study Reminder" />
                                <p>It is a long established fact that a reader will be distracted by the readable. 
                                    <span>2 hours ago</span>
                                </p>
                            </Card>
                            <Card>
                                <img src={Notificn} alt="Study Reminder" />
                                <p>It is a long established fact that a reader will be distracted by the readable. 
                                    <span>2 hours ago</span>
                                </p>
                            </Card>             
                            <Card>
                                <img src={Notificn} alt="Study Reminder" />
                                <p>It is a long established fact that a reader will be distracted by the readable. 
                                    <span>2 hours ago</span>
                                </p>
                            </Card>
                            <Card>
                                <img src={Notificn} alt="Study Reminder" />
                                <p>It is a long established fact that a reader will be distracted by the readable. 
                                    <span>2 hours ago</span>
                                </p>
                            </Card>
                            <Card>
                                <img src={Notificn} alt="Study Reminder" />
                                <p>It is a long established fact that a reader will be distracted by the readable. 
                                    <span>2 hours ago</span>
                                </p>
                            </Card>
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Studyreminders;