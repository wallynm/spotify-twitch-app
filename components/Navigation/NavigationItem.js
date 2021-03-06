import React from 'react';
import { AiFillHome, AiFillSound, AiFillStar } from "react-icons/ai";

const Icons = {
  home: AiFillHome,
  sound: AiFillSound,
  star: AiFillStar
}


const NavigationItem = (props) => {
  let Icon = Icons[props.icon]

  return (
    <div className="navigation-item">
      <Icon/>
      {props.title}
    </div>
  )
}

export default NavigationItem;