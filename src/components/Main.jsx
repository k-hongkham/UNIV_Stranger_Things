import React, {useState} from "react";
import Posts from "./Posts";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

const Main = () => {
  const [token, setToken] = useState("")
  const [posts, setPosts] = useState([])
  return (
    <div>
      <SignUp />
      <Navbar />
      <h1>hello main</h1>
      <Posts />
    </div>
  );
};

export default Main;
