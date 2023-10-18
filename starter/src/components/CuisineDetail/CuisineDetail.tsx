import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../../context/ContextConstructor";
import { RestaurantInterface } from "../../interfaces/type";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CuisineDetail = () => {
  const { restauranttype } = useParams();
  const { restaurants } = useContext(RestaurantContext);

  let foundResType = restaurants.filter((resType) => {
    return resType.restauranttype === restauranttype;
  });
  console.log(foundResType);

  return (
    <div className="container">
      <h1 className="text-center text-uppercase">{restauranttype}</h1>
      <div className="flex">
        {foundResType.map((res) => (
          <RestaurantCard key={`res-by-cui-${res.id}`} {...res} />
        ))}
      </div>
    </div>
  );
};

export default CuisineDetail;
