import { RootState } from "../store";
import { initialState } from "./data";

const isAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated || initialState.isAuthenticated;

const selectors = {
  isAuthenticated,
};

export default selectors;
