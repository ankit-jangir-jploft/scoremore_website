import React, { useEffect, useRef } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import Checmark from "../assets/img/checkmark.svg";
import GooglePlay from "../assets/img/google-play.svg"
import Appstore from "../assets/img/appstore.svg"
import BestTutor from "../assets/img/flashcar.svg"
import Registryexam from "../assets/img/registry-exam.svg"
import Flexible from "../assets/img/practice-test.svg"
import EasyAccess from "../assets/img/readiness.svg"
import Learning from "../assets/img/all-in-one.png"
import Fldcsd from "../assets/img/all-in-one1.png"
import Examde from "../assets/img/all-in-one2.png"
import Test from "../assets/img/test1.png"
import Test1 from "../assets/img/test2.png"
import Test2 from "../assets/img/test3.png"
import Accordian from '../Components/Accordian';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const paginationRef = useRef(null);
    useEffect(() => {
        // This runs after the component has mounted, ensuring the pagination container exists
        if (paginationRef.current) {
            paginationRef.current.classList.add('custom-pagination'); // Ensure class is added
        }
    }, []);
    return (
        <div className='hoe'>
            <div className='hero'>
                <Container>
                    <h1 className='text-center'>
                        Ace your NREMT EMT Exam:<br />
                        Learn More, Score More
                    </h1>
                    <p className='text-center mt-4'>
                        <img src={Checmark} alt="Checmark" className='mx-1' />
                        We have created an all-in-one resource with everything you need to ace the exam
                    </p>
                    {/* <p className='text-center'>
                        <img src={Checmark} alt="Checmark" /> In id est mollis, convallis diam eu, malesuada odio.
                    </p> */}
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Link to='/SignUp' className='btn-primary py-3 me-4'>Get Started</Link>
                        {/* <a href='' className=''><img src={GooglePlay} alt="GooglePlay" className='google-play' /></a> */}
                    </div>
                </Container>
            </div>
            <Container>
                <Row className='ftrs-sld'>
                    <Col md={12} className='sl-lft'>
                        <h2>How does <span>it work?</span></h2>
                            <Row>
                                <Col md={3} className='how-brdr'>
                                    <div className='sl-img'><img src={BestTutor} alt="Best Tutor" /></div>
                                    <span>Learn using bite-sized lessons with Flashcards</span>
                                </Col>
                                <Col md={3} className='how-brdr rtate'>
                                    <div className='sl-img'><img src={Flexible} alt="Flexible" /></div>
                                    <span>Go through Practice <br/>tests</span>
                                </Col>
                                <Col md={3} className='how-brdr'>
                                    <div className='sl-img'><img src={EasyAccess} alt="Easy Access" /></div>
                                    <span>Take Readiness <br/>tests</span>
                                </Col>
                                <Col md={3}>
                                    <div className='sl-img'><img src={Registryexam} alt="Best Tutor" /></div>
                                    <span>Pass your NREMT <br/>registry exam</span>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>
            
            <Container className='contn-scer'>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h3>All-in-one <br/>EMT prep resource</h3>
                        <p>Your complete EMT prep resource – including flashcards, all the practice tests you need, readiness tests, and much more! </p>
                    </Col>   
                    <Col md={6} className='text-center'>
                        <img src={Learning} className='img-fluid' alt="Best Tutor" />
                    </Col>
                </Row>
            </Container>
            
            <div className='lerng-jurn'>
                <Container className='contn-scer'>                    
                    <Row className='align-items-center'>                        
                        <Col md={6} className='text-center'> 
                            <img src={Fldcsd} className='img-fluid' alt="Best Tutor" />                            
                        </Col>
                        <Col md={6}>
                            <h3>Flashcards <br/>for EMT prep</h3>
                            <p>Summarized the entire EMT curriculum into bite sized content using Flashcards with a roadmap.</p>
                        </Col>
                    </Row>                                        
                </Container>
            </div>

            <Container className='contn-scer'>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h3>All the questions <br/>you need</h3>
                        <p>Test your knowledge using hundreds of questions. Every question comes with a detailed explanation to help you understand the concept better.</p>
                    </Col>
                    <Col md={6} className='text-center'>
                          <img src={Examde} className='img-fluid' alt="Best Tutor" />  
                    </Col>
                </Row>       
            </Container>

            <Container className='mt-5'>
                <div className='app-dwnld'>
                        <h2><span>Switch seamlessly</span> between your<br/>computer and mobile device</h2>
                        <a href='' className='d-block mb-3'><img src={GooglePlay} alt="GooglePlay" className='google-play' /></a>
                        <a href='' className=''><img src={Appstore} alt="App store" className='App store' /></a>
                </div>
            </Container>

            <Container className='faq-sec'>
                <h2>FAQs</h2>
                <Accordian />

                <div className='testi-man'>
                    <h3>What people say about us</h3>
                    <p>With lots of unique blocks, you can easily build a page without <br />coding. Build your next landing page.</p>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <img src={Test} alt="Image" className='img-fluid' />
                                <p>“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                                <h4>Isabella Chavez <span>Graphic Designer</span></h4>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <img src={Test1} alt="Image" className='img-fluid' />
                                <p>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                <h4>Curtis Rhodes <span>Digital Marketer</span></h4>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <img src={Test2} alt="Image" className='img-fluid' />
                                <p>“Must have book for all, who want to be Product Designer or Interaction Designer.”</p>
                                <h4>Lucas Mann <span>Co Founder</span></h4>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* <div className='contct-frm'>
                    <Row>
                        <Col md="3">
                            <div className='contct-info'>
                                Call us
                                <span>+1-940-394-2948</span>
                                <span>+1-389-385-3807</span>
                            </div>
                            <div className='contct-info'>
                                Email us
                                <span>support@scoremore.com</span>
                                <span>contact@scoremore.com</span>
                            </div>
                            <div className='contct-info'>
                                Visit us
                                <span>34 Madison Street,<br />
                                    NY, USA 10005</span>
                            </div>
                        </Col>
                        <Col md="9">
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>First & Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="i.e. John Doe" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="i.e. john@mail.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="i.e. +1-234-567-7890" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="email" placeholder="i.e. I need a help" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className='btn-primary px-5'>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </div> */}

            </Container>

            <Footer />

        </div>
    );
}
export default Home;