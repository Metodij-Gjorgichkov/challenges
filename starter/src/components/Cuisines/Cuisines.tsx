import React, { useContext } from "react";
import { RestaurantContext } from "../../context/ContextConstructor";
import { Link } from "react-router-dom";

const Cuisines = () => {
  const { restaurants } = useContext(RestaurantContext);

  const cuisines = Array.from(
    new Set(restaurants.map((res) => res.restauranttype))
  );
  return (
    <div className="container">
      <h1 className="text-center text-uppercase">Cuisines</h1>
      <div className="flex justify-content-center">
        {cuisines.map((cuiBtn, index) => {
          return (
            <Link
              to={`cuisine/${cuiBtn}`}
              key={`cuisine-${index}`}
              className="cui-btn"
            >
              <button className="btn">{cuiBtn}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cuisines;
