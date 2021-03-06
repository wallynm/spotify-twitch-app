import React from 'react';

import LeftSidebar from '../LeftSidebar/index'
import RightSidebar from '../RightSidebar/index'
import Header from '../Header/index'
import Footer from '../Footer/index'

const Layout = (props) => {
  const control = false;

  return (
    <div className="container">
      <div className="content">
        <main>
          <Header/>
          <div>
            {props.children}
          </div>  
        </main>
        <LeftSidebar/>
        <RightSidebar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;