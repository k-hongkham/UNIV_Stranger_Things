import React, { useState, useEffect } from "react";
// import { SignUp } from "./components";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Navbar from "./Navbar";

// import { Link, Routes, Route } from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <div className="main">
      <SignUp setToken={setToken} />
      <Navbar />
      <h1 className="main_title"> START POINT KH</h1>
      <Posts />
    </div>
  );
};

export default Main;
