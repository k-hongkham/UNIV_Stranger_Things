import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ token }) => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/Posts">POSTS</Link>
          <Link to="/SignUp">SIGN UP</Link>
          <Link to="/Login">LOG IN</Link>
          <Link to="/Profile">PROFILES</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
