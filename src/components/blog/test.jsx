import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import config from "../../firebase_config";
import DummyData from "./dummy_data";

import './skeleton.css'

const app = initializeApp(config);
const db = getFirestore(app);

function Test() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        setBlogs(pervArray => [...pervArray, doc]);
        console.log(`${doc.id}`);
      });
    }

    fetchData();
  }, [setBlogs]);

  return (
    <div>
      {blogs.length !== 0 ? (
        blogs.map((blog, i) => { return (<h1 key={i}>{blog.data()["title"]}</h1>); })
      ) : (<div><Skeleton circle height="100%" /><Skeleton count={5} /></div>)}

      <div className="post">
        <div className="left-col">
          <div className="avatar">
            <Skeleton
              circle
              height="100%"
              containerClassName="avatar-skeleton"
            />
          </div>
          <div className="user-name">
            <Skeleton width={70} />
          </div>
        </div>
        <div className="right-col">
          <h3><Skeleton /></h3>
          <p className="mb-0">
            <Skeleton count={3} />
          </p>
        </div>
      </div>

    </div>
  );
}

export default Test;