import React from "react";
import logo from "../logo.png";
const Header = () => {
  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo d-block pt-3" alt="LOGO" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item text-dark">
                <a className="nav-link text-uppercase" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Bikes
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Gear
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Parts
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Tires
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Service-info
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Catalogues
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="icons d-none d-lg-block ">
            <i className="fa-solid fa-magnifying-glass iconsHover p-2"></i>
            <i className="fa-solid fa-bag-shopping iconsHover p-2"></i>
          </div>
        </nav>

        <hr style={{ width: "98%" }} />
      </section>
    </>
  );
};

export default Header;
