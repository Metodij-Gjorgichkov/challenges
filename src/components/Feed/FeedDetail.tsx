import React, { useContext } from "react";
import { ThemeContext, Users } from "../../context/ThemeContextConstructor";
import { formatDistanceToNow } from "date-fns";

const FeedDetail = ({
  id,
  title,
  description,
  user,
  imageUrl,
  time,
}: Users) => {
  const { theme } = useContext(ThemeContext);
  const timeAgo = formatDistanceToNow(new Date(time));
  return (
    <div
      className="col-4 mr-3 mb-3"
      style={{
        border: theme === "light" ? "2px solid black" : "2px solid white",
      }}
    >
      <h1 className="text-center">{title}</h1>
      <small style={{ display: "block" }}>By {user}</small>

      <img
        src={imageUrl}
        alt={user}
        style={{ width: "100%", display: "block" }}
      />

      <p>{description}</p>
      <small>{`Updated ${timeAgo} ago`}</small>
    </div>
  );
};

export default FeedDetail;
