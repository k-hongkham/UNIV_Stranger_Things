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
      <h1>Posts</h1>
      {posts.map((post, idx) => {
        return <div key={post._id}>{post.title}</div>;
      })}
    </>
  );
};

export default Posts;
