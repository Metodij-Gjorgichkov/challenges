import React, { useEffect, useState } from "react";
import { bikeType } from "../App";

const Card = (props: bikeType) => {
  const { name, image, price } = props;
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 mb-4">
        <div className="card borderOrange">
          <img
            className="card-img-top p-5 d-flex justify-content-center align-items-center"
            style={{ maxWidth: "350px", height: "250px" }}
            src={`/img/${image}.png`}
            alt="Card image cap"
          />
          <div className="card-body orange">
            <h6 className="boldedParagraph text-uppercase">{name}</h6>

            <p className="card-text">{price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
