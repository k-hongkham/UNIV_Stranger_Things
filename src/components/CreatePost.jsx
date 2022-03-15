import React, { useState, useEffect } from "react";

const CreatePost = ({ posts, setPost }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title, description", title, description);
  };

  useEffect(() => {
    const makePosts = async () => {
      const response = await createPost();
      const addNewPosts = response.data.posts;
      setDescription(addNewPosts);
      console.log("newPosts:", addNewPosts);
      setPost([data, posts]);
      setTitle("");
      setDescription("");
    };
    makePosts();
  }, []);

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
