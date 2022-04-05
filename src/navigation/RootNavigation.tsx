/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import LandingScreen from "@app/screens/Landing";
import HomeScreen from "@app/screens/Home";
import { useAuth } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const { isAuthenticated } = useAuth();
  const { navigate } = useNavigation();

  React.useEffect(() => {
    !isAuthenticated && navigate("Landing");
  }, [isAuthenticated]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
