import React, { useState, useEffect, createContext } from "react";

import { RestaurantRequest, RestaurantTransForm } from "./restaurant.services";
import { LocationContext } from "../location/location.context";
import { useContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const RetrieveRestaurant = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurantRequest(loc)
        .then(RestaurantTransForm)
        .then((result) => {
          setIsLoading(false);

          setRestaurant(result);
        })
        .catch((err) => {
          setError(err);
        });
    }, 200);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;

      RetrieveRestaurant(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
