import React from 'react'; // Импорт библиотеки React

// Определение функционального компонента ShopCard
const ShopCard = (props) => {
  return (
    <div className="shop-card" style={{backgroundImage: `url(${props.card.img})`, backgroundSize: `contain`}}> {/* Карточка товара */}
      <div className="shop-card__name">{props.card.name.toUpperCase()}</div> {/* Название товара */}
      <div className="shop-card__color">{props.card.color}</div> {/* Цвет товара */}
      <div>
        <div className="shop-card__price">${props.card.price}</div> {/* Цена товара */}
        <div className="shop-card__cart-btn">ADD TO CART</div> {/* Кнопка "Добавить в корзину" */}
      </div>
    </div>
  );
};

export default ShopCard; // Экспорт компонента ShopCard по умолчанию