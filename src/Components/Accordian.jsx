import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';


const Accordian = () => {
    return (
        <div>
            <Row>
                    <Col md={12}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How can I know my level of knowledge?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I do it individually or only in a group?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is the maximum group size?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do I need to buy materials for lessons?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Are you adjusting to the student's schedule?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How the first lesson with teacher will be?</Accordion.Header>
                            <Accordion.Body>
                            By the end of the trial lesson, you will be able to determine for yourself 
                            whether this kind of online lesson is right for you or not. In our experience, 
                            most students appreciate the benefits of online education and decide 
                            to study online.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
        </div>
    );
}

export default Accordian;
