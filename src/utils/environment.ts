import { Alert, BackHandler } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export const internetCheck = () =>
  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      Alert.alert(
        "No internet connection",
        "Make sure that WI-FI or mobile data is turned on, then try again",
        [
          {
            text: "cancel",
            onPress: () => BackHandler.exitApp(),
            style: "cancel",
          },
          { text: "ok", onPress: () => internetCheck() },
        ],
        { cancelable: false }
      );
    }
  });
