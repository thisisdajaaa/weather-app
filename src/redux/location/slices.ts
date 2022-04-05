import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseError } from "@app/redux/api-models/common";

import { initialState } from "./data";
import { BaseLocationResponse } from "./models";

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationRequest: (state) => {
      state.locationResponse.isLoading = true;
    },
    setLocationSuccess: (
      state,
      { payload }: PayloadAction<BaseLocationResponse>
    ) => {
      state.locationResponse.isLoading = false;
      state.locationResponse.response = payload;
    },
    setLocationFailure: (state, { payload }: PayloadAction<ResponseError>) => {
      state.locationResponse.isLoading = false;
      state.locationResponse.error = payload;
    },
  },
});

const { actions: locationActions, reducer: locationReducers } = locationSlice;

export { locationActions, locationReducers };
