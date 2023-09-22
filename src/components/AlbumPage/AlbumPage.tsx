import React from "react";
import "./AlbumPage.css";
import { useParams } from "react-router-dom";
import artists, { Artist } from "../../db";
import Error from "../Error/Error";

const AlbumPage = () => {
  const { id, albumId } = useParams();

  let foundId: Artist | undefined = undefined;
  let foundAlbumById;

  if (id) {
    foundId = artists.find((album) => {
      return album.id === +id;
    });
  }
  if (albumId) {
    foundAlbumById = foundId?.albums.find((album) => {
      return album.albumId === albumId;
    });
  }

  if (!foundAlbumById) {
    return (
      <>
        <Error />
      </>
    );
  }
  console.log(foundAlbumById);
  return (
    <div className="albumPage">
      <img src={`/images/albums/${foundAlbumById?.cover}.jpg`} alt="" />
      <h3 className="bolded">
        Title: <span>{foundAlbumById?.title}</span>
      </h3>
      <h3 className="bolded">
        Year: <span>{foundAlbumById?.year}</span>
      </h3>
      <h3 className="bolded">
        Price: <span>{foundAlbumById?.price}$</span>
      </h3>
    </div>
  );
};

export default AlbumPage;
