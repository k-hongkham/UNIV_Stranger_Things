import React from "react";
import { useState } from "react/cjs/react.production.min";

const Profile = ({ setToken, theUser, setTheUser }) => {
  const handleLogOut = () => {
    setToken("");
    setTheUser({
      messages: [],
      username: "",
      _id: "",
    });
  };
  return (
    <>
      <h3>SENT MESSAGES</h3>
      <div>
        {theUser.messages.length ? (
          theUser.messages.map((msg, idx) =>
            msg.fromUser.username === theUser.username ? (
              <div key={`Inbox: ${idx}`}>
                <div> Subject: {msg.post.title}</div>
                <div> Sent: {msg.content}</div>
              </div>
            ) : null
          )
        ) : (
          <div>NO MESSAGES</div>
        )}

        <h3>INBOX</h3>
        {theUser.messages.length ? (
          theUser.messages.map((msg, idx) =>
            msg.fromUser.username === theUser.username ? (
              <div key={`Inbox: ${idx}`}>
                <div> Subject: {msg.post.title}</div>
                <div> Message {msg.content}</div>
                <div> Sent By: {msg.fromUser.username}</div>
              </div>
            ) : null
          )
        ) : (
          <div>NO MESSAGES</div>
        )}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleLogOut();
        }}
      >
        <button type="submit"> LOT OUT</button>
      </form>
    </>
  );
};

export default Profile;
