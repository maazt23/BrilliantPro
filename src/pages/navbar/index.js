import React from "react";
import { Link } from "react-router-dom";
import "./.css";

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

      </ul>

      <ul>
        <li className="nav-item">
          {
            props.user && (props.user.Role === "admin" || props.user.Role === "learner") ?
            <Link to="/signup" className="nav-link">
              Signout
            </Link>
            :
            <Link to="/login" className="nav-link">
              Login
            </Link>
          }
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
