import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="navbar">
          <h1>music db</h1>
          <img src="/images/raw/Girls-Listen-Music_0.jpg" alt="music db" />
        </div>
      </Link>
    </>
  );
};

export default Navbar;
