/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useAuth } from "@app/hooks";
import LandingScreen from "@app/screens/Landing";
import HomeScreen from "@app/screens/Home";
import WeatherScreen from "@app/screens/Weather";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Landing" component={LandingScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
