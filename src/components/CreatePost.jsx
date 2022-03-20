import React, { useState } from "react";
import { createPost } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      title: title,
      description: description,
      price: price,
      Location: location,
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
      <h3>CREATE !!!</h3>
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
          placeholder="PRICE $0.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <input
          required
          type="text"
          placeholder="WHERE"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>

        <button type="submit" className="add_posts_btn">
          SUBMIT POST
        </button>
      </form>
    </>
  );
};

export default CreatePost;
