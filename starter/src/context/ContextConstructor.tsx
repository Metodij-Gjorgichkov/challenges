import React, { createContext, useEffect, useState } from "react";
import { RestaurantInterface } from "../interfaces/type";
import { json } from "stream/consumers";

interface RestaurantContextType {
  restaurants: RestaurantInterface[];
  favorites: RestaurantInterface[];
  handleAddFavorite: (res: RestaurantInterface) => void;
  handleRemoveFavorite: (res: RestaurantInterface) => void;
  handleUpdateReview: () => void;
}

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
  favorites: [],
  handleAddFavorite: (res: RestaurantInterface) => {},
  handleRemoveFavorite: (res: RestaurantInterface) => {},
  handleUpdateReview: () => {},
});

interface Props {
  children: React.ReactNode;
}
const LS_RESTAURANTS = "restaurants";
const LS_FAVORITES = "favorites";

const ContextConstructor = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);
  const [favorites, setFavorites] = useState<RestaurantInterface[]>(() => {
    if (localStorage.getItem(LS_FAVORITES)) {
      return JSON.parse(localStorage.getItem(LS_FAVORITES)!);
    }
    return [];
  });

  const handleAddFavorite = (res: RestaurantInterface) => {
    setFavorites([...favorites, res]);
  };

  const handleRemoveFavorite = (res: RestaurantInterface) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== res.id));
  };

  const handleUpdateReview = () => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  useEffect(() => {
    if (localStorage.getItem(LS_RESTAURANTS)) {
      const restaurantsFromLocalStorage = JSON.parse(
        localStorage.getItem(LS_RESTAURANTS)!
      );
      setRestaurants(restaurantsFromLocalStorage);
    } else {
      fetch("http://localhost:5001/restaurants")
        .then((res) => {
          if (!res) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setRestaurants(data);
          localStorage.setItem(LS_RESTAURANTS, JSON.stringify(data));
        })
        .catch((err) => {
          console.log("Error fetching data", err);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_RESTAURANTS, JSON.stringify(restaurants));
  }, [restaurants]);

  useEffect(() => {
    localStorage.setItem(LS_FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        favorites,
        handleAddFavorite,
        handleRemoveFavorite,
        handleUpdateReview,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default ContextConstructor;
