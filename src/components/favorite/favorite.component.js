import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavoriteContext } from "../../services/favorites/favorite.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorite, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);
  const isFavorite = favorite.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite ? addToFavorite(restaurant) : removeFromFavorite(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
