// import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import { toast } from 'react-toastify';
// import Calg from "../assets/img/calendarg.svg";
// import Tutest from "../assets/img/Glyphg.svg";
// import Fastf from "../assets/img/time5.svg";
// import Youg from "../assets/img/thumbs-upg.svg";
// import Incrtan from "../assets/img/talkg.svg";
// import Timet from "../assets/img/timeg.svg";
// import Readtes from "../assets/img/approveg.svg";
// import { api_baseURL } from '../api/apiHelper';

// const Sidebar = () => {
//     const [activeTest, setActiveTest] = useState(null); // Track the active test
//     const navigate = useNavigate();

//     const selectCard = async (card) => {
//         console.log("card", card);
    
//         try {
//             let userId = localStorage.getItem("userId");
//             const generatedTestId = uuidv4(); // Unique Test ID
//             console.log("Generated testId:", generatedTestId);
    
//             // Prepare request data based on card type
//             const requestData = {
//                 userId: userId,
//                 cardType: card,
//                 subjects: {}, // default to empty initially
//                 questionType: {}, // default to empty initially
//                 numberOfQuestions: card === "fastFive" ? 5 : 1, // For Fast Five, select 5 questions
//                 testId: generatedTestId,
//             };
    
//             // For "Fast Five", etc., navigate without making an API call immediately
//             if (card === "fastFive") {
//                 navigate('/Subjects', { state: { card, generatedTestId } });
//             } else if (card === "dailyChallenge") {
//                 // Call API and fetch questions if card is "dailyChallenge"
//                 const response = await axios.post(`${api_baseURL}/question/filterQuestion`, requestData);
    
//                 if (response.data.success) {
//                     const questions = response.data.data;
//                     console.log('Filtered Questions:', questions);
//                     navigate('/Subjects', { state: { card, questions, generatedTestId } });
//                 } else {
//                     console.error('Failed to fetch questions:', response.data.message);
//                     toast.error(response.data.message);
//                 }
//             } else {
//                 navigate('/Subjects', { state: { card, generatedTestId } });
//             }
//         } catch (error) {
//             console.error('Error calling filterQuestions API:', error);
//             toast.error("Error fetching questions");
//         }
//     };
    

//     return (
//         <div>
//             <Nav variant="pills" className="flex-column">
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('dailyChallenge')} eventKey="first">
//                         <img src={Calg} alt="Calendar" /> Daily Challenge
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('tutoredTest')} eventKey="second">
//                         <img src={Tutest} alt="Calendar" /> Tutored Test
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('fastFive')} eventKey="third">
//                         <img src={Fastf} alt="Calendar" /> Fast Five
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('youGotThis')} eventKey="fourth">
//                         <img src={Youg} alt="Calendar" /> You Got This
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('incorrectlyAnswered')} eventKey="fifth">
//                         <img src={Incrtan} alt="Calendar" /> Incorrectly Answered
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('timedTest')} eventKey="sixth">
//                         <img src={Timet} alt="Calendar" /> Timed Test
//                     </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link onClick={() => selectCard('readinessTest')} eventKey="seventh">
//                         <img src={Readtes} alt="Calendar" /> Readiness Test
//                     </Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         </div>
//     );
// }

// export default Sidebar;



import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Calg from "../assets/img/calendarg.svg";
import Tutest from "../assets/img/Glyphg.svg";
import Fastf from "../assets/img/time5.svg";
import Youg from "../assets/img/thumbs-upg.svg";
import Incrtan from "../assets/img/talkg.svg";
import Timet from "../assets/img/timeg.svg";
import Readtes from "../assets/img/approveg.svg";
import { api_baseURL } from '../api/apiHelper';

const Sidebar = () => {
    const navigate = useNavigate();

    const selectCard = async (card) => {
        // You can implement your logic here if needed, but for now, we just redirect to /DashBoard
        navigate('/DashBoard');
    };
    
    return (
        <div>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('dailyChallenge')} eventKey="first">
                        <img src={Calg} alt="Calendar" /> Daily Challenge
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('tutoredTest')} eventKey="second">
                        <img src={Tutest} alt="Tutored Test" /> Tutored Test
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('fastFive')} eventKey="third">
                        <img src={Fastf} alt="Fast Five" /> Fast Five
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('youGotThis')} eventKey="fourth">
                        <img src={Youg} alt="You Got This" /> You Got This
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('incorrectlyAnswered')} eventKey="fifth">
                        <img src={Incrtan} alt="Incorrectly Answered" /> Incorrectly Answered
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('timedTest')} eventKey="sixth">
                        <img src={Timet} alt="Timed Test" /> Timed Test
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => selectCard('readinessTest')} eventKey="seventh">
                        <img src={Readtes} alt="Readiness Test" /> Readiness Test
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Sidebar;
