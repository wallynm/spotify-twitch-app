import React from 'react';
import Icons from "react-icons/ai";


const NavigationItem = (props) => {
  
  const Icon = Icons[props.icon]

  return (
    <div className="navigation-item">
      <Icon/>
      {props.title}
    </div>
  )
}

export default NavigationItem;