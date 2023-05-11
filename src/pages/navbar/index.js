import React from "react";
import { Link } from "react-router-dom";
import "./.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/testpage" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/materials" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
