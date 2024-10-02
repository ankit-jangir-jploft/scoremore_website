import React from 'react';
import {Nav} from 'react-bootstrap';
import Calg from "../assets/img/calendarg.svg"
import Tutest from "../assets/img/Glyphg.svg"
import Fastf from "../assets/img/time5.svg"
import Youg from "../assets/img/thumbs-upg.svg"
import Incrtan from "../assets/img/talkg.svg"
import Timet from "../assets/img/timeg.svg"
import Readtes from "../assets/img/approveg.svg"
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
 const Subjects = () => {
    navigate('/Subjects');
  };
    return (
        <div>
            <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="first"><img src={Calg} alt="Calendar" /> Daily Challenge</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="second"><img src={Tutest} alt="Calendar" /> Tutored Test</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="third"><img src={Fastf} alt="Calendar" /> Fast Five</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="fourth"><img src={Youg} alt="Calendar" /> You Got This</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="five"><img src={Incrtan} alt="Calendar" /> Incorrectly Answered</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="sixth"><img src={Timet} alt="Calendar" /> Timed Test</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={Subjects} eventKey="seven"><img src={Readtes} alt="Calendar" /> Readiness Test</Nav.Link>
                        </Nav.Item>
                    </Nav>

            
        </div>
    );
}

export default Sidebar;
