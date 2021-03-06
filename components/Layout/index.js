import React from 'react';

const Layout = (props) => {
  const control = false;

  return (
    <div className="container">
      <div className="content">
        <main>
          <header>HEADER</header>
          <div>
            {props.children}
          </div>  
        </main>
        <aside className="left-sidebar">LEFT SIDEBAR</aside>
        <aside className="right-sidebar">RIGHT SIDEBAR</aside>
      </div>
      <footer>FOOTER</footer>
    </div>
  )
}

export default Layout;