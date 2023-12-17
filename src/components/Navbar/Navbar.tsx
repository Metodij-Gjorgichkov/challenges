import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContextConstructor";

const Navbar = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <div className="Navbar row d-flex justify-content-between align-items-center py-3">
      <div className="col-6">
        <NavLink
          to={"/"}
          className={`mr-3 ${
            theme === "light" ? "color-black" : "color-white"
          }`}
        >
          Feed
        </NavLink>
        <NavLink
          to={"create"}
          className={`${theme === "light" ? "color-black" : "color-white"}`}
        >
          Create
        </NavLink>
      </div>
      <div className="col-6 text-right">
        <button
          onClick={() => {
            handleThemeChange(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <i className="fa-solid fa-sun icon-sun"></i>
          ) : (
            <i className="fa-solid fa-moon icon-moon"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
