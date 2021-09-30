import React from "react";

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      header_type: props.header_type
    };
  }

  render() {
    return (
      <header className={this.state.header_type === 'home' ? `nav__home` : `nav`}>
        <div className="nav__container">
          <a className="nav__item" href="/">Home</a>
          <a className="nav__item" href="/blog">Blog</a>
          <a className="nav__item" href="/">About</a>
          <a className="nav__item" href="/">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;