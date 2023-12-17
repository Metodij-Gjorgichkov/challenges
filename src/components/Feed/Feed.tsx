import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextConstructor";
import FeedDetail from "./FeedDetail";

const Feed = () => {
  const { users } = useContext(ThemeContext);

  if (users) {
    return (
      <div className="row">
        {users.map((user, index) => {
          return <FeedDetail key={index} {...user} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="row">
        <div>No users available.</div>
      </div>
    );
  }
};

export default Feed;
