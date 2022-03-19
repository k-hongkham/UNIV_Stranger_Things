import React, { useState } from "react";
import { newMessage } from "../api";

const Messages = ({ post, idx, token, theUser, setTheUser }) => {
  const [msgs, setMsgs] = useState("");

  const allMsgs = (msgs, post) => {
    const newObj = {
      msgs,
      post: {
        title: post.title,
      },
      fromUser: {
        username: theUser.username,
      },
    };
    const response = theUser.Messages;
    response.push(newObj);
    setTheUser({ ...theUser, messages: response });
  };

  return (
    <form
      key={post._id}
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await newMessage(token, post._id, content);
        allMsgs(msgs, post);
        setMsgs("");
      }}
    >
      <input
        required
        placeholder="WORDS"
        key={`message: ${idx}`}
        value={msgs}
        onChange={(e) => {
          setMsgs(e.target.value);
        }}
      ></input>
      <button type="submit">SEND</button>
    </form>
  );
};

export default Messages;
