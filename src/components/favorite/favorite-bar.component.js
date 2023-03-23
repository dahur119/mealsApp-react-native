import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoriteBar = ({ favorite, onNavigate }) => {
  if (!favorite.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorite &&
          favorite.map((restaurants) => {
            const key = restaurants.name;
            console.log("checking", key);

            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("restaurantsDetails", {
                      restaurants,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurants} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
