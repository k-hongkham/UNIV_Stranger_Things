import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
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
      </div>
    </div>
  );
};

export default Navbar;
