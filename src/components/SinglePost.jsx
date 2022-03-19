import React, { useState } from "react";
// import { updatePost } from "../api";

const SinglePost = ({ el, posts, setPosts, theUser, setTheUserSS }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="posts_container" key={post._id}>
      {posts.map((post, idx) => {
        <h3>{el.title}</h3>
        <h2>{el.author.username}</h2>
        <div>{el.description}</div>
        <div>{el.price}</div>
        <div>{el.location}</div>
        <div>{el.willDeliver}</div>

      })}

      <button
        onClick={() => {
          handleClick(post._id, token);
        }}
      >
        DELETE
      </button>
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
