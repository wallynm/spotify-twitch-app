import React from 'react';
import Navigationitem from './NavigationItem';

const Navigation = () => {

  return (
    <div className="navigation">
      <Navigationitem title="Início" path='/home' icon="home"/>
      <Navigationitem title="Navegar" path='/navigate' icon="star" />
      <Navigationitem title="Rádio" path='/radio' icon="sound" />
    </div>
  )
}

export default Navigation