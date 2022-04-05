import { RootState } from "@app/redux/store";
import { initialState } from "./data";

const locationResponse = (state: RootState) =>
  state.location.locationResponse || initialState.locationResponse;

const selectors = {
  locationResponse,
};

export default selectors;
