import React from 'react';

import './blog.css';

class BlogCard extends React.Component {
  render() {
    return (
      <div className="blog__card">
        <div className="blog__card__content">
          <div className="blog__card__author">
            <img className="author__image" src="https://picsum.photos/200/200" alt="author" />
            <span className="author__name">Himansu</span>
          </div>
          <div>
            <h1 className="blog__card__heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim.</h1>
            <p className="blog__card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est ut magna volutpat venenatis. Aenean ut metus quis odio luctus scelerisque at suscipit...</p>
          </div>
          <div style={{ 'paddingTop': '10px' }}>
            <span className="blog__card__info">Oct 1 · 5 min read · <span className="blog__card__tag">Lorem</span></span>
          </div>
        </div>
        <img className="blog__card__image" src="https://picsum.photos/200/200" alt="blog_image" />
      </div>
    );
  }
}

export default BlogCard;
