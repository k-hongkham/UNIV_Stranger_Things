import React from "react";
// import { SignUp } from "./components";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Navbar from "./Navbar";

// import { Link, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <SignUp />
      <Navbar />
      <h1 className="main_title"> START POINT KH</h1>
      <Posts />
    </div>
  );
};

export default Main;
