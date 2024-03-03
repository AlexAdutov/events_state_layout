import React from 'react';
import ShopItem from './ShopItem.jsx';

const ListView = (props) => {

  return (
    <div className="list-view">
      {props.items.map(item => <ShopItem item={item}/>)}
    </div>
  )
};

export default ListView;