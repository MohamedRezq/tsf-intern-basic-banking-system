import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

export const initializeStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};
