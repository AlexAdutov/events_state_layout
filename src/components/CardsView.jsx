import React from 'react'; // Импорт библиотеки React

import ShopCard from './ShopCard.jsx'; // Импорт компонента ShopCard

// Определение функционального компонента CardsView
const CardsView = (props) => {
  return (
    <div className="cards-view"> {/* Контейнер для отображения карточек */}
      {/* Итерация по массиву cards и создание компонентов ShopCard */}
      {props.cards.map(card => <ShopCard card={card}/>)}
    </div>
  );
};

export default CardsView; // Экспорт компонента CardsView по умолчанию