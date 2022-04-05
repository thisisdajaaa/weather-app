import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
