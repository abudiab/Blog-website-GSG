import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>About</h6>
          </Link>
          <Link className="link" to="/contact">
            <h6>Contact</h6>
          </Link>
        </div>
        <div className="actions">
          <span>John</span>
          <span>Logout</span>
          <span className="edit">
            <Link className="link" to="/edit">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
