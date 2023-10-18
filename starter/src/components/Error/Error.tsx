import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h1>
        Error 404, click here to get back to <Link to={"/"}>Homepage</Link>
      </h1>
    </div>
  );
};

export default Error;
