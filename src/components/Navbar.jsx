import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <Link to={"/"} className="nav_item">
            Some Other Route
          </Link>
          <Link to={"/"} className="nav_item">
            Another route
          </Link>
          <Link to={"/"} className="nav_item">
            last route
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
