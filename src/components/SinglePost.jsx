import React, { useState } from "react";
import { updatePost } from "../api";

const SinglePost = ({ token, post, posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateObj = {
      postTitle: title,
      postDescription: description,
    };
    console.log(post._id);
    updatePost(updateObj, window.localStorage.getItem("token"), post._id);
    // const newPost = posts.map (post => {
    //   if(post._id === pos)
    // })
    console.log("postID:", post_id);
  };
  return (
    <div className="single_post_container">
      <h3>UPDATE ME!@!!</h3>
      <h3>{post.title}</h3>
      <div>{post.description}</div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, post._id);
        }}
      >
        <input
          placeholder="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button type="submit" onClick={() => {}}>
          Update Title
        </button>
      </form>
    </div>
  );
};
export default SinglePost;
