import React, { useContext } from "react";
import { RestaurantContext } from "../../context/ContextConstructor";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const AllRestaurants = () => {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <div className="container">
      <h1 className="text-uppercase text-center">All restaurants</h1>
      <div className="flex">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={`all-res-${restaurant.id}`} {...restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default AllRestaurants;
