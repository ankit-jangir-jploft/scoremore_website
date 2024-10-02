import {Card, Col, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar'; 
import Receipt from "../assets/img/receipt.svg";

const Billinghistory = () => {
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
                            <h2>Billing History</h2>    
                            <div className='tst-rslt-tbl'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date</th>
                                        <th>Payment Type</th>
                                        <th>Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>Card</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>PayPal</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>Card</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>PayPal</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>Card</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>
                                    <tr>
                                        <td>#9854788</td>
                                        <td>06-29-2024</td>
                                        <td>PayPal</td>
                                        <td><img src={Receipt} alt="receipt" /></td>
                                    </tr>                                                                        
                                </tbody>
                            </table>
                            </div>                               
                        </Col>
                    </Row>    
                </div>           
            </div>        
            </>              
  )
}
export default Billinghistory;