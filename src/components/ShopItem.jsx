import React from 'react'; // Импорт библиотеки React

// Определение функционального компонента ShopItem
const ShopItem = (props) => {
  console.log(props) // Вывод в консоль свойств props для отладки

  return (
    <div className="shop-item"> {/* Карточка товара */}
      <div className="shop-item__img"><img src={props.item.img} alt=""/></div> {/* Изображение товара */}
      <div className="shop-item__name">{props.item.name.toUpperCase()}</div> {/* Название товара */}
      <div className="shop-item__color">{props.item.color}</div> {/* Цвет товара */}
      <div className="shop-item__price">${props.item.price}</div> {/* Цена товара */}
      <div className="shop-item__cart-btn">ADD TO CART</div> {/* Кнопка "Добавить в корзину" */}
    </div>
  );
};

export default ShopItem; // Экспорт компонента ShopItem по умолчанию