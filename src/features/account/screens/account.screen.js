import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
} from "../component/component.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      {/* <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/waterlemon.json")}
      /> */}
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
