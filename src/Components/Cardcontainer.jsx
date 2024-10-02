import React, { useState } from 'react';
import Immutable from 'immutable';
import Flashcard from '../Pages/Flashcard';

const CardContainer = () => {
  const [cards] = useState(Immutable.fromJS([
    {
    //   image: '<img src=../assets/img/forbidden.svg alt="Omitted" />',
      word: 'What is Cardiology?',
      description: 'Cardiology is a branch of medicine that concerns diseases and disorders of the heart,',
    },
    {
      word: 'What is Cardiology?',
      description: 'Cardiology is a branch of medicine that concerns diseases and disorders of the heart,',
    },
    {
      word: 'What is Cardiology?',
      description: 'Cardiology is a branch of medicine that concerns diseases and disorders of the heart,',
    },
  ]));
  const [cardNumber, setCardNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const showNextCard = () => {
    if ((cardNumber + 1) !== cards.size) {
      setCardNumber(cardNumber + 1);
    }
  };

  const showPrevCard = () => {
    if (cardNumber !== 0) {
      setCardNumber(cardNumber - 1);
    }
  };

  const generateDots = () => {
    const times = cards.size;
    return Array.from({ length: times }, (_, num) => (
      <span
        key={num}
        className={`card-container__dot fa fa-circle ${num === cardNumber ? 'active' : ''}`}
        onClick={() => setCardNumber(num)}
      />
    ));
  };

  const generateCards = () => {
    const card = cards.get(cardNumber);
    return (
      <Flashcard
        key={cardNumber}
        frontContent={card.get('word')}
        backContent={card.get('description')}
        showNextCard={showNextCard}
        showPrevCard={showPrevCard}
        cardNumber={cardNumber}
      />
    );
  };

  return (
    <div>
      <span
        className='card-container__icon fa fa-plus'
        onClick={() => setShowModal(!showModal)}
      />
      {generateCards()}
      <div className='card-container__dots-wrapper'>
        {generateDots()}
      </div>
    </div>
  );
};

export default CardContainer;