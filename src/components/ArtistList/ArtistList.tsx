import React from "react";
import { Artist } from "../../db";
import { Link } from "react-router-dom";
import "./ArtistList.css";

const ArtistList = ({ id, name, cover }: Artist) => {
  return (
    <>
      <div className="artistsCard">
        <Link to={`artist/${id}`} className="p-relative">
          <img src={`/images/covers/${cover}.jpg`} alt={name} />
          <span>{name}</span>
        </Link>
      </div>
    </>
  );
};

export default ArtistList;
