import React from 'react';
import ShopCard from './ShopCard.jsx';

const CardsView = (props) => {

  return (
    <div className="cards-view">
      {props.cards.map(card => <ShopCard card={card}/>)}
    </div>
  )
};

export default CardsView;