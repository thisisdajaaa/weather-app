import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { authClient } from "@app/utils";
import { actions } from "@app/redux/auth";
import Text from "@app/components/Text";
import Button from "@app/components/Button";
import Header from "@app/components/Header";

import LandingStyles from "./styles";

const LandingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { login } = authClient();

  /**
   * Triggers authClient login then navigate user to Home screen
   * @returns void
   */
  const handleLogin = async () => {
    await login(() => dispatch(actions.setAuthLogin()));
  };

  return (
    <>
      <Header
        centerComponent={
          <Text
            text="Weather Forecast"
            textStyle={LandingStyles.txtWeatherForecast}
          />
        }
        hasBottomDivider
      />

      <View style={LandingStyles.container}>
        <Text
          text="Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city."
          textStyle={LandingStyles.txtWelcome}
        />

        <Button
          title="Login"
          buttonStyle={LandingStyles.btnLogin}
          containerStyle={LandingStyles.loginContainer}
          titleStyle={LandingStyles.txtLogin}
          onPress={() => handleLogin()}
        />
      </View>
    </>
  );
};

export default LandingScreen;
