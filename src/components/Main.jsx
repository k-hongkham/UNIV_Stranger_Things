import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

import { isMe } from "../api";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  const [theUser, setTheUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      setToken(myToken);
      console.log("What's my token?", token);
    }
  }, [token]);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        const response = await isMe(token);
        setTheUser({
          messages: response.data.messages,
          username: response.data.username,
          _id: response.data._id,
        });
      }
    };
    getUser();
  }, [token]);

  return (
    <div className="main_page_container">
      <Navbar token={token} />

      <SignUp token={token} setToken={setToken} />

      <Posts
        posts={posts}
        setPosts={setPosts}
        theUser={theUser}
        setTheUser={setTheUser}
        token={token}
      />
    </div>
  );
};

export default Main;
