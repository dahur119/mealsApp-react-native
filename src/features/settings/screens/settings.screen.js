import React, { useContext } from "react";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authenication/authenication.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarCenter = styled.View`
  padding-top: 4px;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { handleLogout, users } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarCenter>
        <Avatar.Icon size={100} icon="human" backgroundColor="2182BD" />
        <Spacer position="top" size="large">
          <Text variant="caption"> {users.email}</Text>
        </Spacer>
      </AvatarCenter>

      <List.Section>
        <SettingsItem
          style={{ padding: 15 }}
          title="View Your Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 15 }}
          title="logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={handleLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
