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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { handleSignUp, error, isLoading } = useContext(AuthenticationContext);

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
        <Spacer size="small">
          <TextInput
            label="setConfirmPassword"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
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
              onPress={() => handleSignUp(email, password, confirmPassword)}
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
