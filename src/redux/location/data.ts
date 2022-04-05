import { ResponseState } from "@app/redux/api-models/common";

import { BaseLocationResponse, LocationState } from "./models";

const initialLocation: BaseLocationResponse = [];

const initialLocationResponse: ResponseState<BaseLocationResponse> = {
  isLoading: false,
  response: initialLocation,
};

export const initialState: LocationState = {
  locationResponse: initialLocationResponse,
};
