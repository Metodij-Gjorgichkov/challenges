import React, { useContext } from "react";
import { RestaurantContext } from "../../context/ContextConstructor";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Favorites = () => {
  const { favorites } = useContext(RestaurantContext);

  return (
    <div className="container">
      {favorites.length > 0 ? (
        <>
          <h1 className="text-center text-uppercase">
            Your favorite restaurants
          </h1>
          {favorites.map((favRestaurant) => {
            return (
              <RestaurantCard
                key={`fav-res-${favRestaurant.id}`}
                {...favRestaurant}
              />
            );
          })}
        </>
      ) : (
        <p>There are currently no favorites restaurants in your pocket.</p>
      )}
    </div>
  );
};

export default Favorites;
