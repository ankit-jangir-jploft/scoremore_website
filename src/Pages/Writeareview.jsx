import {Col, Form, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar'; 
import Review from "../assets/img/review-icn.svg";
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';

const Writeareview = () => {
    const [rating, setRating] = useState(0)

    return (
            <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con stdy-remn'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar/>
                        </Col>  
                        <Col sm={9} className='rev-rslt'>
                            <h2>Write a review</h2> 
                            <div className='revw-sec'>
                                <img src={Review} className='rwicn' alt="Write a Review" />      
                                <p>How was your experience at the Bookin?</p> 

                                <div className='App text-center'>
                                    {/* set initial value */}
                                    <Rating initialValue={rating} />
                                    {/* <button onClick={handleReset}>reset</button> */}
                                </div>
                                <Form.Group className="mb-3">
                                        <FormCheckLabel>Description</FormCheckLabel>
                                        <Form.Control as="textarea" placeholder="Anything you'd like to add? Your input is valuable to us" rows={4} />
                                </Form.Group>
                                <button type="button" class="btn-primary px-5 btn btn-primary w-100 ">Submit</button>
                            </div> 

                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Writeareview;