import React, { FC } from "react";
import { Header as RnHeader } from "react-native-elements";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@app/styles";
import { authClient } from "@app/utils";
import { actions as authActions } from "@app/redux/auth";
import { actions as locationActions } from "@app/redux/location";
import { actions as weatheractions } from "@app/redux/weather";
import { useAuth } from "@app/hooks";
import Button from "@app/components/Button";

import type { PropsType } from "./types";
import HeaderStyles from "./styles";

const Header: FC<PropsType> = (props) => {
  const { centerComponent, hasBottomDivider } = props;

  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const { logout } = authClient();

  const handleLogout = async () => {
    await logout();
    dispatch(authActions.setAuthLogout());
    dispatch(locationActions.resetLocation());
    dispatch(weatheractions.resetWeather());
  };

  const renderLeftComponent = () => (
    <FontAwesome name="cloud" size={34} color={theme.colors.secondary} />
  );

  const renderRightComponent = () =>
    isAuthenticated ? (
      <Button
        onPress={() => handleLogout()}
        titleStyle={HeaderStyles.txtLogout}
        buttonStyle={HeaderStyles.btnLogout}
        containerStyle={HeaderStyles.logoutContainer}
        title="Logout"
      />
    ) : undefined;

  return (
    <RnHeader
      statusBarProps={{
        backgroundColor: "transparent",
        translucent: true,
      }}
      containerStyle={
        hasBottomDivider
          ? HeaderStyles.dividerContainer
          : HeaderStyles.container
      }
      leftComponent={renderLeftComponent()}
      centerComponent={centerComponent}
      rightComponent={renderRightComponent()}
    />
  );
};

export default Header;
