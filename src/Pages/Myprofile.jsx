import {Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';    
import { useState } from 'react';
import Editpen from "../assets/img/edit-pen.svg";
import { Link } from 'react-router-dom';


const Myprofile = () => {
    const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
    return (
            <>
            <div className='dashboard-pg'>
                <div className='hdr-bgs'></div>
                <div className='container inr-pg-con prfle-pg'>  
                    <Row>
                        <Col sm={3}>
                            <Sidebar/>
                        </Col>  
                        <Col sm={9} className='rev-rslt my-acnt'>
                            <div className='prfle-pgin'> 
                                <div className='prfl-pictr'>
                                    <span><input type="file" accept="image/*" onChange={handleImageUpload} /></span>
                                    {image && <img src={image} alt="Preview" />}
                                    <p><img src={Editpen} alt="Allday" /></p>
                                </div>   
                                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-2">
                                    <Form.Control type="text" value="Bruce"/>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Last Name" className="mb-2">
                                    <Form.Control type="text" value="Wayne" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Email" className="mb-2">
                                    <Form.Control type="email" value="wayneenterp@gmail.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Phone Number" className="mb-2">
                                    <Form.Control type="text" value="+62 89671554547" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password " className="mb-2">
                                    <Form.Control type="password" value="12345678" />
                                    <Link to={'/'} className='chng-pas'>Change Password</Link>
                                </FloatingLabel>
                            </div>                    
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Myprofile;