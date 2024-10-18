import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import { useParams } from 'react-router-dom';

const Helpfaq = () => {
    const { tab } = useParams(); // Use useParams to get the tab from the URL
    const [key, setKey] = useState(tab || 'FAQ');
    console.log("useParam", tab) // Initialize with the default tab

    // Function to set the active tab
    const setActiveTab = (tab) => {
        console.log("tab", tab); // Log the current tab
        setKey(tab); // Set the active tab
    };
    useEffect(() => {
        setActiveTab(tab); // Update the active tab when the tab changes
    }, [tab]);

    return (
        <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con'>
                    <Row>
                        <Col sm={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={9} className='rev-rslt hlp-faq'>
                            <h2>Help</h2>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => {
                                    setActiveTab(k); // Call setActiveTab with the selected tab key
                                }}
                                className="mb-3"
                            >
                                <Tab eventKey="FAQ" title="FAQ">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <p>It is a long established fact that?</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <p>Is safe to use app?</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <p>How do I receive details?</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <p>How can I edit my profile information?</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <p>How filter work?</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Tab>
                                <Tab eventKey="Contact" title="Contact Us">
                                    <Form className='help-frm'>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control type="text" placeholder="Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control as="textarea" placeholder="Message" rows={6} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Row>
                                        <Col md={12} className='text-center'>
                                            <Button className='btn-primary px-5'>Submit</Button>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Helpfaq;
