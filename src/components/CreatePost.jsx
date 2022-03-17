import React, { useState } from "react";
import { createPost } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      title: title,
      description: description,
      price: price,
    };
    console.log(title);

    console.log(price);
    createPost(createdPost, window.localStorage.getItem("token"));
    setTitle("");
    setDescription("");
    setPrice("");
    console.log("these are out title and details", title, description);
  };

  return (
    <>
      <h3>CREATE!!!</h3>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="TITLE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          required
          type="text"
          placeholder="DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          required
          type="text"
          placeholder="PRICE"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <button type="submit" className="add_posts_btn">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default CreatePost;
