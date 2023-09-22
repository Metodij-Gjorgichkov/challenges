import React from "react";
import "./ArtistPage.css";
import { useParams } from "react-router-dom";
import artists, { Artist } from "../../db";
import AlbumList from "../AlbumList/AlbumList";
import Error from "../Error/Error";

const ArtistPage = () => {
  const { id } = useParams();

  let foundArtist: Artist | undefined = undefined;

  if (id) {
    foundArtist = artists.find((artist) => artist.id === +id);
  }
  if (!foundArtist) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <div className="artistPage">
        <img
          className="main-pic"
          src={`/images/covers/${foundArtist.cover}.jpg`}
          alt={foundArtist.name}
        />
        <h3>{foundArtist.name}</h3>
        <p>{foundArtist.bio}</p>
        <AlbumList />
      </div>
    </>
  );
};

export default ArtistPage;
