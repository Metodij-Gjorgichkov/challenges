import "./ArtistItem.css";
import ArtistList from "../ArtistList/ArtistList";
import React from "react";
import artists from "../../db";

const ArtistItem = () => {
  return (
    <>
      <div className="title">
        <h2>Browse the artists</h2>
      </div>
      <div className="artistInner">
        {artists.map((artist) => {
          const { id, name, cover, bio, albums } = artist;
          return (
            <ArtistList
              key={id}
              id={id}
              name={name}
              cover={cover}
              bio={bio}
              albums={albums}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArtistItem;
