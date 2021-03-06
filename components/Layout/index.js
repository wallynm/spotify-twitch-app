import React from 'react';

const Layout = (props) => {
  const control = false;

  return (
    <div className="container">
      <header>HEADER</header>
      <div className="content">
        <main>{props.children}</main>
        <aside className="left-sidebar">LEFT SIDEBAR</aside>
        <aside className="right-sidebar">RIGHT SIDEBAR</aside>
      </div>
      <footer>FOOTER</footer>
    </div>
  )
}

export default Layout;