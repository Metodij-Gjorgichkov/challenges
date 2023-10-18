import React, { useContext } from "react";
import { RestaurantContext } from "../../context/ContextConstructor";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const PopularRestaurant = () => {
  const { restaurants } = useContext(RestaurantContext);
  const popularRestaurants = restaurants
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);

  return (
    <div className="container">
      <h1 className="text-center text-uppercase">
        Our most popular restaurants
      </h1>
      <div className="flex">
        {popularRestaurants.map((res) => {
          return <RestaurantCard key={`popular-res-${res.id}`} {...res} />;
        })}
      </div>
    </div>
  );
};

export default PopularRestaurant;
