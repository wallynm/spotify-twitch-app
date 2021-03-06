import React from 'react';
import { AiFillHome, AiFillSound, AiFillStar } from "react-icons/ai";

const Icons = {
  home: AiFillHome,
  sound: AiFillSound,
  star: AiFillStar
}


const NavigationItem = (props) => {
  let navigationItemClass = 'navigation-item'
  let Icon = () => null;

  if (Icons[props.icon]) {
    Icon = Icons[props.icon]
  }

  if (props.selected) {
    navigationItemClass += ' selected';
  }

  return (
    <div className={navigationItemClass}>
      <Icon/>
      <div className="title">
        {props.title}
      </div>
    </div>
  )
}

export default NavigationItem;