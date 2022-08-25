import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer.js";
import { storeNavbar } from "../layouts/header/context/store.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
    ...storeNavbar,
  },
});
