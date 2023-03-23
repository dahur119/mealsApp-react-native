import React, { useContext } from "react";
import { SafeArea } from "../../../utils/safe-area.component";
import { FavoriteContext } from "../../../services/favorites/favorite.context";
import { RestaurantList } from "../../restaurants/components/restaurant-list.style";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.components";
import { Text } from "../../../components/typography/text.component";

const NoFavoriteArea = styled(SafeArea)`
  align-items: center;
  justify-center: center;
`;

export const FavoriteScreen = ({ navigation }) => {
  const { favorite } = useContext(FavoriteContext);
  const { restaurant } = useContext(RestaurantContext);

  return favorite.length ? (
    <SafeArea>
      <RestaurantList
        data={favorite}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("restaurantsDetails", {
                  restaurants: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurants={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoriteArea>
      <Text>No Favorite</Text>
    </NoFavoriteArea>
  );
};
