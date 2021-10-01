import React from "react";

import BlogCard from "./blog_card";

import './blog.css';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="blog__content">
          <h1 className="header__text">Latest Blogs</h1>
          <div className="blog__column">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
