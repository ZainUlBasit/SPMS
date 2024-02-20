import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice";
import CompanyReducer from "./Slices/CompanySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      Auth: AuthReducer,
      CompanyState: CompanyReducer,
    },
  });
};
