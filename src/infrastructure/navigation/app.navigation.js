import React, { useContext } from "react";
import { RestaurantNavigation } from "./resturant.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/map.screen";
import { SettingsNavigator } from "./settings.navigation";

import { FavoriteContextProvider } from "../../services/favorites/favorite.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurant.context";

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOption = ({ route }) => {
  const iconName = TabIcon[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigation = () => {
  return (
    <FavoriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOption}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurant" component={RestaurantNavigation} />

            <Tab.Screen name="Map" component={MapScreen} />

            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoriteContextProvider>
  );
};
