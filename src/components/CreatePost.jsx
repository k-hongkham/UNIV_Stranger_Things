import React, { UseState } from "react";

const CreatePost = () => {
  const [title, setTitle] = UseState("");
  const [details, setDetails] = UseState("");

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
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="details"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default CreatePost;
