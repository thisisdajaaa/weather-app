import { ResponseState } from "@app/redux/api-models/common";
import * as location from "@app/redux/api-models/location";

export type BaseLocationResponse = location.BaseResponse;

export type LocationState = {
  locationResponse: ResponseState<BaseLocationResponse>;
};
