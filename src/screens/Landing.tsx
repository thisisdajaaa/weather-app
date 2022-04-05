import { View } from "react-native";
import React from "react";
import Header from "@app/components/Header";
import Text from "@app/components/Text";
import { theme } from "@app/styles";
import Button from "@app/components/Button";

const Landing = () => {
  return (
    <>
      <Header
        centerComponent={
          <Text text="Weather Forecast" textStyle={{ ...theme.textBold }} />
        }
        hasBottomDivider
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 36,
          paddingTop: 96,
          backgroundColor: theme.colors.white,
        }}
      >
        <Text
          text="Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city."
          textStyle={{ ...theme.textRegular }}
        />

        <Button
          onPress={() => alert("g")}
          titleStyle={{
            ...theme.textLight,
            textAlign: "center",
            fontWeight: "700",
            position: "absolute",
          }}
          buttonStyle={{
            height: 32,
            borderRadius: 3,
          }}
          containerStyle={{ width: 86, marginTop: 36 }}
          title="Login"
        />
      </View>
    </>
  );
};

export default Landing;
