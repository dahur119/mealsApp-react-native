import React from "react";
import styled from "styled-components";
import { Text } from "react-native-paper";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info";

const MyText = styled.Text``;

export const MapCallOut = ({ restaurants }) => (
  <CompactRestaurantInfo isMap restaurant={restaurants} />
);
