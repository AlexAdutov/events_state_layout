import React, { useState } from 'react'; // Импорт библиотеки React и хука useState
import IconSwitch from './IconSwitch.jsx'; // Импорт компонента IconSwitch
import ShopCard from './ShopCard.jsx'; // Импорт компонента ShopCard
import CardsView from './CardsView.jsx'; // Импорт компонента CardsView
import ShopItem from './ShopItem.jsx'; // Импорт компонента ShopItem
import ListView from './ListView.jsx'; // Импорт компонента ListView

// Определение функционального компонента Store
const Store = () => {
  // Состояние для хранения текущей иконки отображения (карточки или список)
  const [icon, setIcon] = useState("view_module");

  // Массив товаров
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  return (
    <div className="store"> {/* Контейнер для компонента Store */}
      {/* Компонент для переключения режима отображения */}
      <IconSwitch icon={icon} onSwitch={() => icon === "view_module" ? setIcon("view_list") : setIcon("view_module")}/>
      {/* Условный рендеринг: если выбрана иконка "view_module", то отображается компонент ListView, иначе - CardsView */}
      {icon === "view_module" ? <ListView items={products}/> : <CardsView cards={products}/>}
    </div>
  );
};

export default Store; // Экспорт компонента Store по умолчанию