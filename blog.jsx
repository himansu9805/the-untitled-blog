import React from "react";

import BlogCard from "./blog_card";
import DummyData from "./dummy_data";

import './blog.css';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog__list">
        <div className="blog__content">
          <h1 className="header__text">LATEST BLOGS</h1>
          <div className="blog__column">
            <BlogCard data={DummyData} />
            <BlogCard data={DummyData} />
            <BlogCard data={DummyData} />
          </div>
        </div>
        <div className="blog__discover">
          <h1 className="header__text">DISCOVER MORE</h1>
          <div className="discover__tag__list">
            <span className="discover__tag">Lorem</span>
            <span className="discover__tag">Maecenas</span>
            <span className="discover__tag">adipiscing</span>
            <span className="discover__tag">metus</span>
            <span className="discover__tag">scelerisque</span>
            <span className="discover__tag">volutpat</span>
            <span className="discover__tag">quis</span>
          </div>
          <div class="discover__search">
            <input type="text" class="discover__search__input" placeholder="Search a keyword" />
            <button class="discover__search__button">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
