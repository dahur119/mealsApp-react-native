import React from "react";
import { Text } from "react-native-paper";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantDetail = () => {
  return <Text>restaurant detail screeen</Text>;
};

const RestaurantStack = createStackNavigator();

export const RestaurantNavigation = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantScreen}
      ></RestaurantStack.Screen>
      <RestaurantStack.Screen
        name="restaurantsDetails"
        component={RestaurantDetailScreen}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
