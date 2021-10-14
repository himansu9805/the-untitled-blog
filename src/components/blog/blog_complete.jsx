import React from 'react';
import { GrFavorite } from 'react-icons/gr';

import './blog_complete.css';
import './dummy_data';
import DummyData from './dummy_data';

class BlogComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = DummyData;
  }
  render() {
    return (
      <div className='blog'>
        <div className='blog__header'>
          <div className='blog__info'>
            <img className='author__image' src={this.state.author_image} alt='author' />
            <span className='author__name'>{this.state.author}</span>
            <span className='info'>Oct 1 · 5 min read</span>
          </div>
          <button class="follow">Follow</button>
        </div>
        <h1 className='blog__title'>{this.state.title}</h1>
        <p className='blog__quote'>{this.state.quote}</p>
        <img className='blog__image' src={this.state.image} alt='blog_image' />
        <span className="image__reference">Photo from <a className='reference__url' href="https://picsum.photos/">Lorem Picsum</a></span>
        <p className='blog__description'><span className='first__letter'>{this.state.description.slice(0, 1)}</span>{this.state.description.slice(1,)}</p>
        <div className="blog__footer">
          <div className="tag__list">
            <span class="text">Tags: </span>
            <span className="tag">Lorem</span>
            <span className="tag">Maecenas</span>
            <span className="tag">adipiscing</span>
            <span className="tag">metus</span>
            <span className="tag">scelerisque</span>
            <span className="tag">volutpat</span>
            <span className="tag">quis</span>
          </div>
          <span><GrFavorite /></span>
        </div>
      </div>
    );
  }
}

export default BlogComplete;