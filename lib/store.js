import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      Auth: AuthReducer,
    },
  });
};
