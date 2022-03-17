import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import Edit from "./Edit";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      console.log("data:", newPosts);

      setPosts(newPosts);
    };
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post, idx) => {
        return (
          <>
            <Edit key={idx} setEditPost={setEditPost} post_id={post_id} />
          </>
        );
      })}
    </>
  );
};

export default Posts;
