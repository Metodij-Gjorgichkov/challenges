import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <Link to={"/"} className="logo">
        restaurants
      </Link>
      <Link to={"/favorites"} className="fav-icon">
        <i className="fas fa-heart fa-2x"></i>
      </Link>
    </header>
  );
};

export default Navbar;
