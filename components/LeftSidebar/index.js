import React from 'react';
import ListItems from '../ListItems/index';
import Navigation from '../Navigation/index';

const LeftSidebar = () => {

  return (
    <aside className="left-sidebar">
      <Navigation/>

      <ListItems bold title="Sua biblioteca">
        <div>Feito para você</div>
        <div>Tocados recentemente</div>
        <div>Músicas curtidas</div>
        <div>Albuns</div>
        <div>Artistas</div>
        <div>Podcasts</div>
      </ListItems>

      <ListItems title="Playlist">
        <div>This is system of</div>
        <div>This is Lumneers</div>
        <div>This is Imagine Dragoons</div>
        <div>This is Molejo</div>
        <div>This is mamonas assassinas</div>
      </ListItems>
    </aside>
  )
}

export default LeftSidebar;