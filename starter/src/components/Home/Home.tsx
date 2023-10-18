import React from "react";
import Cuisines from "../Cuisines/Cuisines";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import PopularRestaurant from "../PopularRestaurants/PopularRestaurant";
import SupriseRestaurant from "../SupriseRestaurant/SupriseRestaurant";

const Home = () => {
  return (
    <>
      <SupriseRestaurant />
      <PopularRestaurant />
      <Cuisines />
      <AllRestaurants />
    </>
  );
};

export default Home;
