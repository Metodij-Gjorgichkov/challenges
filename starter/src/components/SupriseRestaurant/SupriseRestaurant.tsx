import React, { useContext } from "react";
import { RestaurantContext } from "../../context/ContextConstructor";
import { Link } from "react-router-dom";

const SupriseRestaurant = () => {
  const { restaurants } = useContext(RestaurantContext);

  const supriseRes =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  return (
    <div className="container">
      <h1>Don't know what to eat</h1>
      <Link to={`restaurant/${supriseRes?.slug}`} className="sup-btn">
        <button className="btn-green">Suprise me!</button>
      </Link>
    </div>
  );
};

export default SupriseRestaurant;
