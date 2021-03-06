import React from 'react';
import { AiFillHome, AiFillSound, AiFillStar } from "react-icons/ai";
import Link from 'next/link'
import { useRouter } from 'next/router'

const Icons = {
  home: AiFillHome,
  sound: AiFillSound,
  star: AiFillStar
}

const NavigationItem = (props) => {
  const router = useRouter()
  const currentPathSelected = () => {
    return router.pathname === props.path
  }

  let navigationItemClass = 'navigation-item'
  let Icon = () => null;

  if (Icons[props.icon]) {
    Icon = Icons[props.icon]
  }

  if (currentPathSelected()) {
    navigationItemClass += ' selected';
  }

  return (
    <Link href={props.path}>
      <div className={navigationItemClass}>
        <Icon/>
        <div className="title">
          {props.title}
        </div>
      </div>
    </Link>
  )
}

export default NavigationItem;