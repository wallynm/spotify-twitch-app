import React from 'react';

const ListItems = (props) => {
  
  return (
    <div className="listitems">
      <h3 className="listitems-title">
        {props.title}
      </h3>
      <div className="listitems-content">
        {props.children}
      </div>
    </div>
  )
}

export default ListItems;