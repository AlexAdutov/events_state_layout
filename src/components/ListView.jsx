import React from 'react'; // Импорт библиотеки React

import ShopItem from './ShopItem.jsx'; // Импорт компонента ShopItem

// Определение функционального компонента ListView
const ListView = (props) => {
  return (
    <div className="list-view"> {/* Контейнер для отображения элементов */}
      {/* Итерация по массиву items и создание компонентов ShopItem */}
      {props.items.map(item => <ShopItem item={item}/>)}
    </div>
  );
};

export default ListView; // Экспорт компонента ListView по умолчанию