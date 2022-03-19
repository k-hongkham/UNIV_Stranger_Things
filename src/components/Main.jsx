import React, { useState } from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import CreatePost from "./CreatePost";

const Main = () => {
  const [theUser, setTheUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <SignUp />
      <Navbar />
      <h1>hello main</h1>
      <CreatePost />
      <Posts
        posts={posts}
        setPosts={setPosts}
        theUser={theUser}
        setTheUser={setTheUser}
      />
    </div>
  );
};

export default Main;
