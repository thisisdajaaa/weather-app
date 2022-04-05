import React from "react";
import { View } from "react-native";
import Text from "@app/components/Text";

import type { PropsType } from "./types";
import ProfileStyles from "./styles";

const Profile: React.FC<PropsType> = (props) => {
  const { name, nickname } = props;

  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.row}>
        <Text text={`Github Name: `} textStyle={ProfileStyles.txtLabel} />
        <Text text={String(name)} textStyle={ProfileStyles.txtValue} />
      </View>
      <View style={ProfileStyles.row}>
        <Text text={`Github URL: `} textStyle={ProfileStyles.txtLabel} />
        <Text
          text={`https://github.com/${String(nickname)}`}
          textStyle={ProfileStyles.txtValue}
        />
      </View>
    </View>
  );
};

export default Profile;
