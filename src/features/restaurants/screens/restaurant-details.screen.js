import React, { useState } from "react";

import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakFast, setBreakFast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  const { restaurants } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurants={restaurants} />
      <ScrollView>
        <List.Accordion
          title="breakfast"
          left={(props) => <List.Icon {...props} icon="break-slice" />}
          expanded={breakFast}
          onPress={() => setBreakFast(!breakFast)}
        >
          <List.Item title="Bread & Tea" />
          <List.Item title="Rice and Stew" />
        </List.Accordion>
        <List.Accordion
          title="lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunch}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Garri and Groundnut" />
          <List.Item title="Beans and bread" />
          <List.Item title="Yam and Stew" />
        </List.Accordion>
        <List.Accordion
          title="dinner"
          left={(props) => <List.Icon {...props} icon="meatLoaf" />}
          expanded={dinner}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Eba and Soup" />
          <List.Item title="Egusi and Semo" />
          <List.Item title="Amala and Soup" />
        </List.Accordion>
        <List.Accordion
          title="drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinks}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Ogogoro" />
          <List.Item title="Origin Bitter" />
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
