import React, { useState } from "react";
import { updatePost } from "../api";

const SinglePost = ({ token, post, posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState("");

  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    const { data } = await updatePost({ title: postTitle }, token, postId);
  };
  return (
    <div>
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
        <button type="submit">Update Title!</button>
      </form>
    </div>
  );
};
export default SinglePost;
