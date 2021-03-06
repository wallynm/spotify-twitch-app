import React from 'react';

const ListItems = (props) => {
  let listItemsContentClassName = 'listitems-content'


  if (props.bold) {
    listItemsContentClassName += ' listitems-bold'
  }

  return (
    <div className='listitems'>
      <h5>
        {props.title}
      </h5>
      <div className={listItemsContentClassName}>
        {props.children}
      </div>
    </div>
  )
}

export default ListItems;