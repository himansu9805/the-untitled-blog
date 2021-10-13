import React from "react";
import { withRouter } from "react-router-dom";

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      header_type: props.header_type
    };
  }
  gotoHome = (param) => {
    this.props.history.push(`/`);
  }

  gotoBlog = (param) => {
    this.props.history.push(`/blog`);
  }

  render() {
    return (
      <header className={this.state.header_type === 'home' ? `nav__home` : `nav`}>
        <div className="nav__container">
          <span className="nav__item" onClick={() => this.gotoHome()}>Home</span>
          <span className="nav__item" onClick={() => this.gotoBlog()}>Blog</span>
          <a className="nav__item" href="/">About</a>
          <a className="nav__item" href="/">Contact</a>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);