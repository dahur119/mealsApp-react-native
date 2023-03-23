import React, { useState } from "react";
import { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Search } from "../components/search.component";
import { FavoriteBar } from "../../../components/favorite/favorite-bar.component";
import { FavoriteContext } from "../../../services/favorites/favorite.context";
import { RestaurantList } from "../components/restaurant-list.style";

export const RestaurantScreen = ({ navigation }) => {
  const { restaurant, isLoading } = useContext(RestaurantContext);
  const { favorite } = useContext(FavoriteContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoriteBar favorite={favorite} onNavigate={navigation.navigate} />
      )}

      {isLoading ? (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator animating={true} style={{ marginLeft: -25 }} />
        </View>
      ) : (
        <RestaurantList
          data={restaurant}
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
      )}
    </SafeArea>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//   },
// });
