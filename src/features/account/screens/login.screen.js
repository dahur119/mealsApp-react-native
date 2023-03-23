import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../component/component.style";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authenication/authenication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error, isLoading } = useContext(AuthenticationContext);
  console.log("checkingloading", isLoading);

  return (
    <AccountBackground>
      <Title>Meal To Go</Title>
      <AccountContainer>
        <AuthInput
          label="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="small">
          <TextInput
            label="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <ErrorContainer variant="error">{error}</ErrorContainer>
          </Spacer>
        )}

        <Spacer>
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => handleLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color="blue" />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
