import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Brand from "../assets/img/score-logo.svg";
import LoginImg from "../assets/img/mobile-hand.svg";
import { useTheme } from '../Components/ThemeProvider';
import Brandw from "../assets/img/score-logow.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_baseURL } from '../api/apiHelper';

const CheckMail = ({ userId }) => { // Pass userId as a prop
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      // Retrieve email from localStorage for the API call
      const email = localStorage.getItem('resetEmail');
      const response = await axios.post(`${api_baseURL}/user/verify/otp`, { otp, email }, { withCredentials: true });
      console.log("response", response);

      if (response.data.success) {
        console.log("it hits login with otp")
        const { token } = response?.data
        const userId = response?.data?.user?._id;
        console.log("token ---------", token)
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token); // Store token in localStorage
        navigate("/Dashboard");
         // Show success toast
         toast.success("OTP verified! Welcome back.");
      } else {
        toast.error(response.data.message || "Verification failed.");
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className='logn-pge'>
      <Row>
        <Col md={6}>
          <Link to='/'>{theme === "light" ? (
            <img src={Brand} alt="Brand Logo" />
          ) : (
            <img src={Brandw} alt="Brand Logo" />
          )}</Link>
          <div className='logn-pge-out'>
            <div className='logn-pge-in'>
              <h1>Check your email</h1>
              <p>Tap the button in the email we sent to <span>xyz@gmail.com</span> or enter the code below:</p>
              <Form onSubmit={handleVerifyOTP}>
                <Form.Group className="mb-3" controlId="formGroupOtp">
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Code" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    required // Ensure input is required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </Button>
              </Form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className='lgn-rgt'>
            <img src={LoginImg} alt="Login Illustration" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CheckMail;
