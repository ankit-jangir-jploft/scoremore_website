import {Button, Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import Roadlock from "../assets/img/road-lock.svg";
import { Link } from 'react-router-dom';


const Roadmap = () => {
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
                            <div className="roadmap">
                                <Button type="submit" className='btn-primary px-5'>Medicine</Button>
                                <Row>
                                <Col md={2}></Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig wth-drdnt'>
                                                <Link to="/Flashcard">1</Link> </div>
                                            <p>Medical Terminology</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                2</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={2}></Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                5</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                4</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                3</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                </Row>
                                <Row>
                                <Col md={2}></Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                6</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                7</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={2}></Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                10</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                9</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                8</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                </Row>
                                <Row>
                                <Col md={2}></Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-dig'>
                                                <img src={Roadlock} alt="twitter" />
                                                11</div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={4}>
                                        <div className='roadmap-in'>
                                            <div className='numbre-sqre'>
                                                <p>?</p>
                                            </div>
                                            <p>The Human Body</p>
                                        </div>                                        
                                    </Col>
                                    <Col md={2}></Col>
                                </Row>
                                <Button type="submit" className='btn-primary btn-primary23 px-5'>Airway</Button>
                            </div>
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Roadmap;