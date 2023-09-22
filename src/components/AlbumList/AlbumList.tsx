import React from "react";
import "./AlbumList.css";
import artists, { Artist } from "../../db";
import { Link, useParams } from "react-router-dom";
import Error from "../Error/Error";

const AlbumList = () => {
  const { id } = useParams();

  let foundAlbum: Artist | undefined = undefined;

  if (id) {
    foundAlbum = artists.find((artist) => artist.id === +id);
  }
  if (!foundAlbum) {
    return (
      <>
        <Error />
      </>
    );
  }

  console.log(foundAlbum);
  return (
    <div className="albumList">
      {foundAlbum.albums.map((album) => {
        return (
          <div className="item" key={album.price}>
            <Link to={`${album.albumId}`}>
              <img src={`/images/albums/${album.cover}.jpg`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumList;
