import React, { useState } from "react";
import { updatePost } from "../api";

const SinglePost = ({ post, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const postId = 

 
    const updateObj = {
      Title: title,
      Description: description,
    };
    updatePost(updateObj, window.localStorage.getItem("token"), postId);
    setPosts(editedPosts);
    setTitle("");
    setDescription("");
    console.log(updateObj);
    // const newPost = posts.map (post => {
    //   if(post._id === pos)
    // })
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={() => {}}>
          Update Title
        </button>
      </form>
    </div>
  );
};
export default SinglePost;
