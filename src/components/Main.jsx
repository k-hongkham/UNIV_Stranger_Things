import React, { useState } from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  const [theUser, setTheUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

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
