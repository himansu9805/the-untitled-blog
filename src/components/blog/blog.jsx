import React from "react";

import './blog.css';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="blog__content">
          <h1 className="header__text">Latest Blogs</h1>
          <div className="blog__card">
            <img className="blog__card__image" src="https://picsum.photos/200/200" alt="" />
            <div className="blog__card__content">
              <h1 className="blog__card__heading">Blog Heading</h1>
              <p className="blog__card__description">The blog description goes here........</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;