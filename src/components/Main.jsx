import React from "react";
// import { SignUp } from "./components";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Posts />
      <SignUp />
      <div className="main_container">
        <Navbar />
        <h1 className="main_title"> HELLO WORLD!!!</h1>
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
