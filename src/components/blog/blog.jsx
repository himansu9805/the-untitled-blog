import React from "react";
import { useHistory } from "react-router";

import BlogCard from "./blog_card";
import DummyData from "./dummy_data";

import './blog.css';

function Blog(props) {
  const history = useHistory();

  const gotoCreateBlog = () => history.push('/blog/create');
  const gotoLogin = () => history.push('/login');

  return (
    <div>
      <div className="blog__create">
        <button className="create" onClick={() => props.session ? gotoCreateBlog() : gotoLogin()}><span className="text">START WRITING</span></button>
        <span className="text">It's easy and free to post your thinking on any topic and connect with millions of readers.</span>
      </div>
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
          <div className="discover__search">
            <input type="text" className="discover__search__input" placeholder="Search a keyword" />
            <button className="discover__search__button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
