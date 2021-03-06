import React from 'react';

const ListItems = (props) => {
  return (
    <div className="listitems">
      <h3>
        {props.title}
      </h3>
      <div className="listitems-content">
        {props.children}
      </div>
    </div>
  )
}

export default ListItems;