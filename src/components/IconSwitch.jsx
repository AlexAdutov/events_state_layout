import React from 'react';

const IconSwitch = (props) => {
  console.log(props)
  return (
    <div>
      <div onClick={props.onSwitch} className="material-icons">
        {props.icon}
      </div>
    </div>
  );
};

export default IconSwitch;