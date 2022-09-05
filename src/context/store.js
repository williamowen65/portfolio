import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer.js";
import { storeNavbar } from "../layouts/header/context/store.js";
import storeCarousel from "../features/displayCard/layoutStyles/carousel/context/store";

export const store = configureStore({
  reducer: {
    app: appReducer,
    ...storeNavbar,
    ...storeCarousel,
  },
});
