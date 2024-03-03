import React from 'react'; // Импорт библиотеки React

// Определение функционального компонента IconSwitch
const IconSwitch = (props) => {
  console.log(props) // Вывод в консоль свойств props для отладки

  return (
    <div>
      {/* Кнопка-иконка, при клике на которую вызывается функция onSwitch */}
      <div onClick={props.onSwitch} className="material-icons">
        {props.icon} {/* Отображение иконки */}
      </div>
    </div>
  );
};

export default IconSwitch; // Экспорт компонента IconSwitch по умолчанию