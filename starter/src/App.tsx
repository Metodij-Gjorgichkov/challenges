import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContextConstructor from "./context/ContextConstructor";
import AllRestaurants from "./components/AllRestaurants/AllRestaurants";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import Favorites from "./components/Favorites/Favorites";
import Cuisines from "./components/Cuisines/Cuisines";
import CuisineDetail from "./components/CuisineDetail/CuisineDetail";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <ContextConstructor>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="restaurant/:slug" element={<RestaurantDetail />} />
          <Route path="cuisine/:restauranttype" element={<CuisineDetail />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ContextConstructor>
    </BrowserRouter>
  );
};

export default App;
