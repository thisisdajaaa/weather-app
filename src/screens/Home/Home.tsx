import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux/location";
import { useAuth } from "@app/hooks";
import Header from "@app/components/Header";
import Input from "@app/components/Input";
import Profile from "@app/components/Profile";
import Button from "@app/components/Button";

import HomeStyles from "./styles";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { authData } = useAuth();

  const [city, setCity] = useState<string>("");

  const locationReponse = useSelector(selectors.locationResponse);

  /**
   * Dispatches the callLocationApi action
   * @returns void
   */
  const handleSearch = () => {
    dispatch(actions.callLocationApi(city));
  };

  /**
   * If response is valid then navigate
   * to weather screen with the returned
   * longitude and latitude of the city
   * @returns void
   */
  useEffect(() => {
    const isResponsevalid =
      !locationReponse.isLoading && !isEmpty(locationReponse.response);

    if (isResponsevalid) {
      const { lat, lon } = locationReponse.response[0];

      navigate("Weather", { latitude: lat, longitude: lon });
    }
  }, [locationReponse.isLoading]);

  return (
    <>
      <Header hasBottomDivider />

      <View style={HomeStyles.container}>
        <Profile name={authData?.name} nickname={authData?.nickname} />

        <Input
          value={city}
          placeholder="City"
          onChange={(value) => setCity(value)}
        />

        <Button
          onPress={handleSearch}
          buttonStyle={HomeStyles.btnDisplay}
          containerStyle={HomeStyles.displayContainer}
          title="Display Weather"
          disabled={!city}
          loading={locationReponse.isLoading}
        />
      </View>
    </>
  );
};

export default HomeScreen;
