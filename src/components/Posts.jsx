import React, { useEffect, useState } from "react";
// import { fetchAllPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsView = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts"
      );
      const data = await response.json();
      console.log("data:", data);

      setPosts(data.data.posts);
    };
    fetchPostsView();
  }, []);

  return (
    <>
      {posts.map((post, idx) => {
        return (
          <div>
            <div key={post._id}>
              <h3>{post.title}</h3>
            </div>
            <div>{post.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
