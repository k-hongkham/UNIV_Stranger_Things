import React, { useState } from "react";
import { createPost } from "../api";

const CreatePost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async ({ element }) => {
    element.preventDefault();
    const response = await createPost();
    const info = response.data.posts;
    setPosts([info, posts]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h3>CREATE!!!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TITLE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button type="submit" className="add_posts_btn">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default CreatePost;
