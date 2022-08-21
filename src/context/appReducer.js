import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    screenWidth: null,
    screenHeight: null,
  },
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth =
        action.payload;
    },
    setScreenHeight: (
      state,
      action
    ) => {
      state.screenHeight =
        action.payload;
    },
  },
});

export const setScreenWidth =
  appSlice.actions.setScreenWidth;
export const setScreenHeight =
  appSlice.actions.setScreenHeight;
export default appSlice.reducer;
