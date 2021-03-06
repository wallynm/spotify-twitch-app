import React from 'react';
import Navigationitem from './NavigationItem';
import { useRouter } from 'next/router'


const Navigation = () => {
  const router = useRouter()

  const currentPathSelected = (item) => {
    return router.pathname === item
  }

  return (
    <div className="navigation">
      <Navigationitem title="Início" selected={currentPathSelected('/home')} icon="home"/>
      <Navigationitem title="Navegar" selected={currentPathSelected('/navigate')} icon="star" />
      <Navigationitem title="Rádio" selected={currentPathSelected('/radio')} icon="sound" />
    </div>
  )
}

export default Navigation