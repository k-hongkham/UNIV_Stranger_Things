import React, { useState, useEffect } from "react";
// import { SignUp } from "./components";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";

// import { Link, s, Route } from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <div className="main">
      <SignUp setToken={setToken} />
      <Navbar />
      <CreatePost posts={posts} setPosts={setPosts} />
      <h1 className="main_title"> START POINT KH</h1>
      <Posts />
    </div>
  );
};

export default Main;
