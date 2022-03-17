import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      console.log("data:", newPosts);

      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, []);

  return (
    <>
      {posts.map((el, idx) => {
        return (
          <>
            <SinglePost posts={posts} setPosts={setPosts} el={el} key={idx} />{" "}
          </>
        );
      })}
    </>
  );
};

export default Posts;
