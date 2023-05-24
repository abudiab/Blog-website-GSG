import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with ❤️ in Palestine.</span>
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
    </footer>
  );
};

export default Footer;
