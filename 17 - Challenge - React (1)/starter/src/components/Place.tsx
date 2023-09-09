import React from "react";

interface Props {
  img: string;
  place: string;
  desc: string;
}

const Place = ({ img, place, desc }: Props) => {
  return (
    <div className="card-33">
      <img src={img} alt={`Image of ${place}`} />
      <div className="centered-content">
        <h2>{place}</h2>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Place;
