import React from "react";
import "./Error.css";
import { useLocation, Link } from "react-router-dom";

const Error = () => {
  const id = useLocation();

  console.log(id.pathname);
  return (
    <div className="error">
      <h2>
        Error 404 <br />
        <br /> Go back to <Link to={"/"}>Homepage</Link>
      </h2>
    </div>
  );
};

export default Error;
