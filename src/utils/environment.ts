import { Alert, BackHandler } from "react-native";
import NetInfo from "@react-native-community/netinfo";

/**
 * Checks if there is any internet network detected
 * in the running device
 * @returns Promise<void>
 */
export const checkInternet = () =>
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
          { text: "ok", onPress: () => checkInternet() },
        ],
        { cancelable: false }
      );
    }
  });
