import { AxiosResponse } from "axios";
import { OPEN_WEATHER_MAP_KEY } from "@env";
import { locationInstance } from "@app/api";
import { AppDispatch, AppThunk } from "@app/redux/store";
import { ResponseError } from "@app/redux/api-models/common";
import { BaseResponse } from "@app/redux/api-models/location";

import { locationActions } from "./slices";
import { isEmpty } from "lodash";

const {
  setLocationRequest,
  setLocationSuccess,
  setLocationFailure,
  resetLocation,
} = locationActions;

const getLocationsData = (query: string) => {
  return locationInstance.get<BaseResponse>(
    `direct?q=${query}&limit=5&appid=${OPEN_WEATHER_MAP_KEY}`
  );
};

const callLocationApi =
  (payload: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLocationRequest());

      const response: AxiosResponse<BaseResponse> = await getLocationsData(
        payload
      );

      if (!isEmpty(response?.data)) {
        dispatch(setLocationSuccess(response?.data));
      } else {
        dispatch(setLocationFailure("Invalid value has been entered."));
      }
    } catch (error) {
      dispatch(setLocationFailure(error as ResponseError));
    }
  };

const actions = {
  callLocationApi,
  resetLocation,
};

export default actions;
