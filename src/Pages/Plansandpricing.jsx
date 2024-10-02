
import {Button, Card, Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Nextnn from "../assets/img/right-tk.svg";
import { useNavigate } from 'react-router-dom';

const Plansandpricing = () => {
    const navigate = useNavigate();
    const Congratulationsplus = () => {
        navigate("/Congratulationsplus");
    };
    return (
            <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar/>
                        </Col>  
                        <Col sm={9} className='rev-rslt '>
                            <div className='pln-prc'>
                                <h1>Score More PLUS</h1>
                                <h2>Take the First Step Towards Success!</h2>
                                <ul>
                                    <li><img src={Nextnn} alt="Right" /> Step-by-Step guide to PASS the NREMT EMT exam</li>    
                                    <li><img src={Nextnn} alt="Right" /> Self-paced learning with 24/7 access</li>    
                                    <li><img src={Nextnn} alt="Right" /> 1000+ Practice Questions </li>    
                                    <li><img src={Nextnn} alt="Right" /> 1000+ Digital Flashcards</li>    
                                    <li><img src={Nextnn} alt="Right" /> Detailed Performance Analytics</li>
                                    <li><img src={Nextnn} alt="Right" /> Multiple Readiness Tests</li>    
                                </ul>
                                <h3>PLUS Membership</h3>
                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <div className='month-prc'>
                                                1 Month<br/><span>Quick Exam-Prep</span>

                                                <p>12.99/month</p>
                                                <span>$12.99 billed monthly</span>
                                            </div>
                                            
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className='mst-ppl'>
                                            <div className='month-prc'>
                                                3 months<span>Be 100% Ready</span>
                                                <p>$9.99/month<small>Save 23%</small></p>
                                            <span>$29.97 billed every 3 months</span>
                                            </div>
                                            
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card>
                                            <div className='month-prc'>
                                                12 Months<span>In-Depth Learning</span>
                                                <p>$7.99 /month<small>Save 38%</small></p>
                                                <span>$95.99 billed annually</span>
                                            </div>
                                            
                                        </Card>
                                    </Col>
                                </Row>
                                
                                 
                                
                                <Row>
                                    <Col md={12} className='text-center'>
                                        <Button type="submit" className='btn-primary px-5' onClick={Congratulationsplus}>Choose Plan</Button>
                                    </Col>
                            </Row>   
                            </div>                      
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>             
  )
}
export default Plansandpricing;
