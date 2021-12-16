import React from 'react';
import { GrFavorite, GrTwitter, GrFacebook, GrLinkedin, GrLink, GrSave } from 'react-icons/gr';
import { BiComment } from 'react-icons/bi';

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
          <button className="follow">Follow</button>
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
          <div className="blog__actions">
            <div className="left">
              <span className="icons"><GrFavorite /></span>
              <span className="icons"><BiComment /></span>
            </div>
            <div className="right">
              <span className="social__icons"><GrTwitter /></span>
              <span className="social__icons"><GrFacebook /></span>
              <span className="social__icons"><GrLinkedin /></span>
              <span className="social__icons"><GrLink /></span>
              <span className="social__icons"><GrSave /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogComplete;