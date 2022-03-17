import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      title: title,
      details: details,
    };
    console.log(title);
    console.log(details);
  };

  return (
    <div className="CreatePostContainer">
      <h3>CREATE</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e, el._id);
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default CreatePost;
