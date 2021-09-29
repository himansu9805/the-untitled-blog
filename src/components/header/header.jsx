import React from "react";

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="nav">
        <div className="nav__container">
          <a className="nav__item" href="/">Home</a>
          <a className="nav__item" href="/">Blog</a>
          <a className="nav__item" href="/">About</a>
          <a className="nav__item" href="/">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;