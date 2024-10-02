import React, { useState } from 'react';
import {Col, ProgressBar, Row} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';   
import Heart from "../assets/img/heart.png";
import Next from "../assets/img/nxt-aro.svg";
import Previous from "../assets/img/pre-aro.svg"; 
import Bookmarkb from "../assets/img/bookmarkb.svg";
import Hint from "../assets/img/idea.svg";
import Playbtn from "../assets/img/play-button-arrowhead.svg";
import Shuffle from "../assets/img/shuffle.svg";
import { Link } from 'react-router-dom';


const Flashcard = ({ frontContent, backContent, showPrevCard, showNextCard, cardNumber }) => {
        const now = 33;
        const [showAnswer, setShowAnswer] = useState(false);      
        const content = showAnswer ? backContent : frontContent;
        const iconClass = showAnswer ? 'reply' : 'share';
        const cardClass = showAnswer ? 'back' : '';
        const contentClass = showAnswer ? 'back' : 'front';
        const actionClass = showAnswer ? 'active' : '';
    return (
            <>
            <div className='dashboard-pg'>
            <div className='hdr-bgs'></div>
            <div className='container inr-pg-con'>  
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9} className='text-center'>
                    <div className='man-crd'>
                        <Row className='mb-3'>
                            <Col md={6}>
                                <div className='progr-in'>                                
                                    <ProgressBar now={now} />
                                    <label>{now}%</label>
                                </div>
                            </Col>
                            <Col md={6}>
                                <span className='card__counter'>{cardNumber + 1}/5</span>
                            </Col>
                        </Row>
                        
                        <div className={`card ${cardClass}`} onClick={() => setShowAnswer(!showAnswer)}>
                            <div className='hnt-sve'>
                                <div className='hint-cls'>
                                    <img src={Hint} alt="Hint" /> Get a hint
                                </div>
                                <img src={Bookmarkb} alt="Bookmark" />
                            </div>
                            <div className='card__flip-card' onClick={() => setShowAnswer(!showAnswer)}>
                                <span className={`fa fa-${iconClass}`} />
                            </div>
                            <div className={`card__content--${contentClass}`}>
                                <img src={Heart} className='flash-im' alt="Heart" />
                                {content}
                            </div>
                        </div>
                            <div className={`card__actions ${actionClass}`}>
                                <Link to='/'>
                                    <img src={Playbtn} alt="Play Button" />
                                </Link>
                                <div className='d-flex gap-3'>
                                    <div className='card__prev-button' onClick={() => {showPrevCard(); setShowAnswer(false);}}>
                                        <img src={Previous} alt="Previous" />
                                    </div>
                                    <div className='card__next-button' onClick={() => {showNextCard();setShowAnswer(false);}}>
                                            <img src={Next} alt="Next" />
                                    </div>
                                </div>
                                <Link to='/'>
                                    <img src={Shuffle} alt="Shuffle Button" />
                                </Link>
                        </div>
                    </div>
                    </Col>
                </Row>    
            </div>           
        </div>        
            </>              
  )
}
export default Flashcard;
