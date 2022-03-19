import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ token }) => {
  return (
    <div>
      <div>
        <nav>
          <Link className="nav_links" to="/posts">
            POSTS
          </Link>
          <Link className="nav_links" to="/signup">
            SIGN UP
          </Link>
          <Link className="nav_links" to="/login">
            LOG IN
          </Link>
          <Link className="nav_links" to="/profile">
            PROFILES
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
