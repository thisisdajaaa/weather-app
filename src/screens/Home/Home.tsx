import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux/location";
import Header from "@app/components/Header";
import Input from "@app/components/Input";
import Button from "@app/components/Button";

import HomeStyles from "./styles";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [city, setCity] = useState<string>("");

  const locationReponse = useSelector(selectors.locationResponse);

  const handleSearch = () => {
    dispatch(actions.callLocationApi(city));
  };

  useEffect(() => {
    const isFormValid =
      !locationReponse.isLoading && !isEmpty(locationReponse.response);

    if (isFormValid) {
      const { lat, lon } = locationReponse.response[0];

      navigate("Weather", { latitude: lat, longitude: lon });
    }
  }, [locationReponse.isLoading]);

  return (
    <>
      <Header hasBottomDivider />

      <View style={HomeStyles.container}>
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
