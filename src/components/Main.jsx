import React from "react";
// import { SignUp } from "./components";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Navbar from "./Navbar";
import { Link, Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <nav className="nav">
        <Link className="nav_links" to="/Posts">
          POSTS
        </Link>
        <Link className="nav_links" to="/">
          HOME
        </Link>
        <Link className="nav_links" to="/Profile">
          PROFILES
        </Link>
      </nav>
      <h1 className="main_title"> START POINT KH</h1>
      <Posts />
      <SignUp />
      <div className="stuff">
        {/* <Switch>
          <Route
            path="/"
            render={() => {
              return <SignUp />;
            }}
          />

          <Route
            path="/posts"
            render={() => {
              return <Posts />;
            }}
          />

          <Redirect to="/" />
        </Switch> */}
      </div>
    </div>
  );
};

export default Main;
