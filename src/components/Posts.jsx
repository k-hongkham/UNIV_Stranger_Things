import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import CreatePost from "./CreatePost";

const Posts = ({ token, theUser, setTheUser, posts, setPosts }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, [token]);

  const handleFilter = async (e, postId) => {
    e.preventDefault();
    const { data } = await updatePost({ title: title }, token, postId);
    console.log(data.post);
    const filtered = posts.filter((post) => {
      return post._id !== data.post._id;
    });
    const newPosts = [...filtered, data.post];
    setPosts(newPosts);
  };

  const handleDelete = async (post_id, token) => {
    const response = await deletePost(
      post_id,
      window.localStorage.getItem("token")
    );
    const resetPosts = [];

    posts.map((post) => {
      if (post._id !== post_id) {
        resetPosts.push(post);
      }
    });
    setPosts(resetPosts);
  };

  return (
    <>
      <CreatePost />
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
            {!theUser._id ? null : theUser._id === post.author.id}{" "}
            {/* {
              <button onClick {() => handleDelete(post._id, token)}>
                DELETE
              </button>
            } */}
          </>
        );
      })}
    </>
  );
};

export default Posts;
