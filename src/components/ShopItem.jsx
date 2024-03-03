import React from 'react';

const ShopItem = (props) => {
  console.log(props)
  return (
    <div className="shop-item">
      <div className="shop-item__img"><img src={props.item.img} alt=""/></div>
      <div className="shop-item__name">{props.item.name.toUpperCase()}</div>
      <div className="shop-item__color">{props.item.color}</div>
      <div className="shop-item__price">${props.item.price}</div>
      <div className="shop-item__cart-btn">ADD TO CART</div>
    </div>
  );
};

export default ShopItem;