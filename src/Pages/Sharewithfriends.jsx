import {Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar'; 
import Friends from "../assets/img/friends.svg";
import Instagramm from "../assets/img/instagramm.svg";
import Facebookk from "../assets/img/facebookk.svg";
import Twitterr from "../assets/img/twitterr.svg";
import Messanger from "../assets/img/messanger.svg";
import Whatsapp from "../assets/img/whatsapp.svg";
import Line from "../assets/img/line.svg";
import SMS from "../assets/img/sms.svg";
import Emaill from "../assets/img/emaill.svg";
import More from "../assets/img/more.svg";

const Sharewithfriends = () => {
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
                        <img src={Friends} className='frnd-im' alt="Friends" />
                        <div className='shar-frnd'>
                            <h3>Share with friends</h3>
                            <ul>
                                <li>
                                    <img src={Instagramm} alt="Instagram" /> <span>Instagram</span>
                                </li>
                                <li>
                                    <img src={Facebookk} alt="facebook" /> <span>Facebook</span>
                                </li>
                                <li>
                                    <img src={Twitterr} alt="twitter" /> <span>Twitter</span>
                                </li>
                                <li>
                                    <img src={Messanger} alt="messanger" /> <span>Messanger</span>
                                </li>
                                <li>
                                    <img src={Whatsapp} alt="whatsapp" /> <span>WhatsApp</span>
                                </li>
                                <li>
                                    <img src={Line} alt="line" /> <span>Line</span>
                                </li>
                                <li>
                                    <img src={SMS} alt="SMS" /> <span>SMS</span>
                                </li>
                                <li>
                                    <img src={Emaill} alt="email" /> <span>Email</span>
                                </li>
                                <li>
                                    <img src={More} alt="more" /> <span>More</span>
                                </li>
                            </ul>
                        </div>
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Sharewithfriends;