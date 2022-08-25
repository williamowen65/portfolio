import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
