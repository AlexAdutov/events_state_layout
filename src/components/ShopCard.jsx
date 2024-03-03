import React from 'react';

const ShopCard = (props) => {

  return (
    <div className="shop-card" style={{backgroundImage: `url(${props.card.img})`, backgroundSize: `contain`}}>
      <div className="shop-card__name">{props.card.name.toUpperCase()}</div>
      <div className="shop-card__color">{props.card.color}</div>
      <div>
        <div className="shop-card__price">${props.card.price}</div>
        <div className="shop-card__cart-btn">ADD TO CART</div>
      </div>
    </div>
  );
};

export default ShopCard;