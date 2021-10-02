import React from 'react';
import { withRouter } from 'react-router-dom';

import './homepage.css';
import './typewriter.css';

class Homepage extends React.Component {

  gotoBlog = (param) => {
    this.props.history.push(`/blog`);
  }

  render() {
    return (
      <div className="main__context">
        <div className="main__heading">
          <p className="line-1 anim-typewriter">Hello, World!</p>
        </div>
        <div className="main__subheading">
          <p className="subheading__text">
            A nest of <span className="subheading__text__highlight">Special Writing Jutsu</span>!
          </p>
          <p className="subheading__text">
            Write about what you felt about favourite anime and share it with the world!
          </p>
        </div>
        <div className="content__body">
          <button className="transparent__button" onClick={() => this.gotoBlog()}>Read Blogs</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);