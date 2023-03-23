import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyWord) => {
    setKeyword(searchKeyWord);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((request) => {
        setIsLoading(false);

        setLocation(request);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
