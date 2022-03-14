import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      console.log("data:", newPosts);

      setPosts(newPosts);
      console.log("newposts:", newPosts);
    };
    getPosts();
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
