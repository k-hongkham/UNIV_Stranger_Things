import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <nav className="nav">
            <Link className="nav_links" to="/Posts">
              POSTS
            </Link>
            <Link className="nav_links" to="/SignUp">
              SIGN UP
            </Link>
            <Link className="nav_links" to="/Profile">
              PROFILES
            </Link>
          </nav>
          <div className="stuff"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
