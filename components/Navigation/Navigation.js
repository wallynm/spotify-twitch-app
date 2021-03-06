import React from 'react';
import Navigationitem from './NavigationItem';

const Navigation = () => {
    return (
    <div className="navigation">
      <Navigationitem icon="home" title="Home"/>
      <Navigationitem icon="sound" title="Star" />
      <Navigationitem icon="star" title="Sound" />
    </div>
  )
}

export default Navigation;