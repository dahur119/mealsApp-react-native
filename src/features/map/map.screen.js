import React, { useState, useEffect, useContext } from "react";
import MapView, { MapCallout } from "react-native-maps";
import { LocationContext } from "../../services/location/location.context";
import { RestaurantContext } from "../../services/restaurants/restaurant.context";
import styled from "styled-components";
import { Search } from "./components/search.component";
import { Marker } from "react-native-maps";
import { Callout } from "react-native-maps";
import { MapCallOut } from "./components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurant = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurant.map((restaurants) => {
          return (
            <Marker
              key={restaurants.name}
              title={restaurants.name}
              coordinate={{
                latitude: restaurants.geometry.location.lat,
                longitude: restaurants.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallOut
                  onPress={() =>
                    navigation.navigate("restaurantsDetails", {
                      restaurants,
                    })
                  }
                  restaurants={restaurants}
                />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
