import React from 'react';
import { withRouter } from 'react-router-dom';

import './blog.css';

class BlogCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  gotoComplete = (params) => {
    this.props.history.push('/dummyBlog');
  }

  render() {
    return (
      <div className="blog__card">
        <div className="blog__card__content">
          <div className="blog__card__author">
            <img className="author__image" src={this.state.author_image} alt="author" />
            <span className="author__name">Himansu</span>
          </div>
          <div>
            <h1 className="blog__card__heading" onClick={() => this.gotoComplete()}>{this.state.title}</h1>
            <p className="blog__card__description">{this.state.description.slice(0, 120)}...</p>
          </div>
          <div style={{ 'paddingTop': '10px' }}>
            <span className="blog__card__info">Oct 1 · 5 min read · <span className="blog__card__tag">Lorem</span></span>
          </div>
        </div>
        <img className="blog__card__image" src={this.state.image} alt="blog_image" />
      </div>
    );
  }
}

export default withRouter(BlogCard);
