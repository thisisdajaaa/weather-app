import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare module "@env" {
  export const OPEN_WEATHER_MAP_API: string;
  export const OPEN_WEATHER_MAP_KEY: string;
  export const AUTH0_CLIENT_ID: string;
  export const AUTH_CLIENT_DOMAIN: string;
}

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Landing: undefined;
  Home: undefined;
};
