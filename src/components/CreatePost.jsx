import React, { useState } from "react";
import { createPost } from "../api";

<<<<<<< HEAD
const CreatePost = ({ post, setPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title:", title);
    console.log("description:", description);
    const response = await createPost();
    console.log("trying to add", response);
    const addNewPosts = response.data.posts;
    console.log("trying to add new posts", response.data.posts);
    setDescription(addNewPosts);
    console.log("newPosts:", addNewPosts);
    setPost([data, ...posts]);
    setTitle("");
    setDescription("");

    console.log("title, description", title, description);
=======
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
>>>>>>> cb977ffe36ce9657ae9a456214e7c76b8e551d76
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
