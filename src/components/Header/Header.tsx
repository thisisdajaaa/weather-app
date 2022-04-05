import React, { FC } from "react";
import { Header as RnHeader } from "react-native-elements";

import type { PropsType } from "./types";
import HeaderStyles from "./styles";
import { theme } from "@app/styles";
import { FontAwesome } from "@expo/vector-icons";
import Button from "@app/components/Button";
import { useDispatch } from "react-redux";
import { authClient } from "@app/utils";
import { actions } from "@app/redux/auth";
import { useAuth } from "@app/hooks";

const Header: FC<PropsType> = (props) => {
  const {
    centerComponent,
    containerStyle,
    placement,
    barStyle,
    hasBottomDivider,
  } = props;

  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const { logout } = authClient();

  const handleLogout = async () => {
    await logout();
    dispatch(actions.setAuthLogout());
  };

  return (
    <RnHeader
      statusBarProps={{
        backgroundColor: "transparent",
        translucent: true,
      }}
      placement={placement}
      barStyle={barStyle ?? "dark-content"}
      containerStyle={
        hasBottomDivider
          ? HeaderStyles.dividerContainer
          : [HeaderStyles.container, containerStyle]
      }
      leftComponent={
        <FontAwesome name="cloud" size={24} color={theme.colors.black} />
      }
      centerComponent={centerComponent}
      rightComponent={
        isAuthenticated ? (
          <Button
            onPress={() => handleLogout()}
            titleStyle={HeaderStyles.txtLogout}
            buttonStyle={HeaderStyles.btnLogout}
            containerStyle={HeaderStyles.logoutContainer}
            title="Logout"
          />
        ) : undefined
      }
    />
  );
};

export default Header;
