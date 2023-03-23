import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authenication/authenication.context";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const { users } = useContext(AuthenticationContext);
  const [favorite, setFavorite] = useState([]);

  const saveFavoriteData = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorite-${uid}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const loadFavorite = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favorite-${uid}`);
      if (value !== null) {
        setFavorite(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    if (users) {
      loadFavorite(users.uid);
    }
  }, [users]);

  useEffect(() => {
    if (users) {
      saveFavoriteData(favorite, users.uid);
    }
  }, [favorite, users]);

  const add = (restaurant) => {
    setFavorite([...favorite, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorite = favorite.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorite[newFavorite];
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addToFavorite: add,
        removeFromFavorite: remove,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
