import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = ({ token, theUser, setTheUser, posts, setPosts }) => {
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, [token]);

  const handleClick = async (post_id, token) => {
    const response = await deletePost(
      post_id,
      window.localStorage.getItem("token")
    );
    const resetPosts = response.data.posts;

    posts.map((post) => {
      if (post._id !== post_id) {
        resetPosts.push(post);
      }
    });
    setPosts(resetPosts);
  };
  return (
    <>
      {posts.map((post, idx) => {
        return (
          <>
            <h3>{post.title}</h3>
            <h2>Seller: {post.author.username}</h2>
            <div>Description:</div>
            <div>{post.description}</div>
            <div>Price:{post.price}</div>
            <div>Location: {post.location}</div>
            <div>{post.willDeliver}</div>
          </>
        );
      })}
    </>
  );
};

export default Posts;
