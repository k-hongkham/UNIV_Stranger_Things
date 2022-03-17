import React, { useState } from "react";
import { updatePost } from "../api";

const Edit = ({ setEditPost, post_id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedPost = {
      title: title,
      description: description,
    };
    updatePost(editedPost, window.localStorage.getItem("token"), post_id);
    setTitle("");
    setDescription("");
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
        <button type="submit" onClick={() => {}}>
          Update Title
        </button>
      </form>
    </div>
  );
};
export default Edit;
