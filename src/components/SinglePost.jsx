import React, { useState } from "react";
// import { updatePost } from "../api";

const SinglePost = ({ token, el, posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");

  // const handleSubmit = async (e, postId) => {
  //   e.preventDefault();
  //   const { data } = await updatePost({ title: postTitle }, token, postId);
  // };
  return (
    <div>
      <h2>{el.author.username}</h2>
      <h3>{el.title}</h3>
      <div>{el.description}</div>
      <div>{el.price}</div>
      <div>{el.location}</div>
      <div>{el.willDeliver}</div>

      {/* <form
        onSubmit={(e) => {
          handleSubmit(e, el._id);
        }}
      >
        <input
          type="text"
          placeholder="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button type="submit">Update</button>
      </form> */}
    </div>
  );
};

export default SinglePost;
