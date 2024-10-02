import {Col, Row} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Roadlock from "../assets/img/edit-stst.svg";
import Medical from "../assets/img/star.svg"
import Lungs from "../assets/img/lungs.svg"
import Heart from "../assets/img/heart.svg"
import Trauma from "../assets/img/trauma.svg"
import Emsoperations from "../assets/img/emergency-services.svg"
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';

const Statisticss = () => {
    const percentage = 78;
    const persntred = 0;
    return (
            <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con prvc-pol'>  
                <div className='stct-bg'>
                    <Row>
                        <Col>
                            <h3>5 / 8</h3>
                            <p>Correct of Answered</p>
                        </Col>
                        {/* <Col>
                            <h3>6</h3>
                            <p>Unanswered</p>
                        </Col> */}
                        <Col>
                            <SemiCircleProgressBar percentage={63} showPercentValue background={'#E6F4FF'} stroke={'#FFC04E'}/>
                            {/* <p>Community Average is 70%</p> */}
                        </Col>  
                        {/* <Col>
                            <h3>0s</h3>
                            <p>Time Spend Studying</p>
                        </Col> */}
                        <Col>
                            <h3><img src={Roadlock} alt="twitter" /></h3>
                            <p>Daily Streak</p>
                        </Col>
                    </Row>
                </div>
                      

                    <Row>
                        <Col sm={7}>
                            <Row className='rew-brdr'>
                                <Col sm={8} className='tiny-lrr'>Subjects Insights</Col>
                                <Col sm={4} className='text-end tinytr'>Correct / Answered</Col>
                            </Row>
                            <Row className='rew-brdr'>
                                <Col sm={8}><img src={Medical} alt="Medical" /> Medical</Col>
                                <Col sm={4} className='text-end'>1 / 2</Col>
                            </Row>
                            <Row className='rew-brdr'>
                                <Col sm={8}><img src={Lungs} alt="Lungs" /> Airway</Col>
                                <Col sm={4} className='text-end'>1 / 2</Col>
                            </Row>
                            <Row className='rew-brdr'>
                                <Col sm={8}><img src={Heart} alt="Heart" /> Cardiology</Col>
                                <Col sm={4} className='text-end'>1 / 2</Col>
                            </Row>
                            <Row className='rew-brdr'>
                                <Col sm={8}><img src={Trauma} alt="Trauma" /> Trauma</Col>
                                <Col sm={4} className='text-end'>2 / 2</Col>
                            </Row>
                            <Row className='rew-brdr'>
                                <Col sm={8}><img src={Emsoperations} alt="EMS Operations" /> EMS Operations</Col>
                                <Col sm={4} className='text-end'>0 / 0</Col>
                            </Row>
                        </Col>

                        <Col sm={5}>
                        <Row className='rew-brdr'>
                            <Col sm={12} className='tinytr manul-mr'>Subject Score</Col>
                        </Row>
                        <Row className='rew-brdr'>
                            <Col sm={2} className='text-end'><b>50%</b></Col>
                            <Col sm={10}><ProgressBar variant="danger" now={50} /></Col>
                        </Row>
                        <Row className='rew-brdr'>
                            <Col sm={2} className='text-end'><b>50%</b></Col>
                            <Col sm={10}><ProgressBar variant="danger" now={50} /></Col>
                        </Row>
                        <Row className='rew-brdr'>
                            <Col sm={2} className='text-end'><b>50%</b></Col>
                            <Col sm={10}><ProgressBar variant="danger" now={50} /></Col>
                        </Row>
                        <Row className='rew-brdr'>
                            <Col sm={2} className='text-end'><b>100%</b></Col>
                            <Col sm={10}><ProgressBar variant="success" now={100} /></Col>
                        </Row>
                        <Row className='rew-brdr'>
                            <Col sm={2} className='text-end'><b>0%</b></Col>
                            <Col sm={10}><ProgressBar variant="danger" now={1} /></Col>
                        </Row>
                        </Col>
                    </Row> 
                    <Row className='mt-5 justify-content-center'>
                        <Col md={6}>
                            <Row>
                            <Col md={12}>
                                <Link to={"/Testdetails"}>
                                    <div className='score-card'>
                                        <div className=''>
                                            <p>Test ID: <strong>2547</strong></p>
                                            <p>Date: <strong>17/07/2024</strong></p>
                                            <p>Mode: <strong>Tutorial</strong></p>
                                            <p>Total Questions: <strong>50</strong></p>
                                        </div>
                                        <div className='rvew-prt'>
                                            <div className='progrs-mn'>
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                <span>35/50</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={12} className='mt-4'>
                                <Link to={"/Testdetails"}>
                                    <div className='score-card'>
                                        <div className=''>
                                            <p>Test ID: <strong>2547</strong></p>
                                            <p>Date: <strong>17/07/2024</strong></p>
                                            <p>Mode: <strong>Tutorial</strong></p>
                                            <p>Total Questions: <strong>50</strong></p>
                                        </div>
                                        <div className='rvew-prt rvew-prt-red'>
                                            <div className='progrs-mn'>
                                                <CircularProgressbar value={persntred} text={`${persntred}%`} />
                                                <span>00/00</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={12} className='mt-4'>
                                <Link to={"/Testdetails"}>
                                    <div className='score-card'>
                                        <div className=''>
                                            <p>Test ID: <strong>2547</strong></p>
                                            <p>Date: <strong>17/07/2024</strong></p>
                                            <p>Mode: <strong>Tutorial</strong></p>
                                            <p>Total Questions: <strong>50</strong></p>
                                        </div>
                                        <div className='rvew-prt'>
                                            <div className='progrs-mn'>
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                                <span>35/50</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={12} className='mt-4'>
                                <Link to={"/Testdetails"}>
                                    <div className='score-card'>
                                        <div className=''>
                                            <p>Test ID: <strong>2547</strong></p>
                                            <p>Date: <strong>17/07/2024</strong></p>
                                            <p>Mode: <strong>Tutorial</strong></p>
                                            <p>Total Questions: <strong>50</strong></p>
                                        </div>
                                        <div className='rvew-prt rvew-prt-red'>
                                            <div className='progrs-mn'>
                                                <CircularProgressbar value={persntred} text={`${persntred}%`} />
                                                <span>00/00</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            </Row>
                        </Col>
                            
                    </Row>
                </div>           
            </div>        
            </>              
  )
}
export default Statisticss;