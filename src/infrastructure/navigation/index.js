import React, { useContext } from "react";
import { AppNavigation } from "./app.navigation";
import { AuthenticationContext } from "../../services/authenication/authenication.context";
import { AccountNavigator } from "./account.navigator";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { users } = useContext(AuthenticationContext);
  console.log("checking");

  return (
    <NavigationContainer>
      {users ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
