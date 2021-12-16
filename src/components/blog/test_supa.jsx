import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

function TestSupa() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        let { data, error, status } = await supabase
          .from('blog')
          .select(`title, description, author`);

        if (error && status !== 406) {
          throw error
        }
        data.forEach((doc) => {
          setBlogs(pervArray => [...pervArray, doc]);
          console.log(doc);
        });
      } catch (error) {
        alert(error.message)
      }
    }
    getBlogs();
  }, [setBlogs]);

  return (
    <div>
      {blogs.length !== 0 ? (
        blogs.map((blog, i) => { return (<h1 key={i}>{blog['title']}</h1>); })
      ) : (<h1>Loading</h1>)}
    </div>
  );
}

export default TestSupa;