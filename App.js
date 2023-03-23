import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthenticationProvider } from "./src/services/authenication/authenication.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
