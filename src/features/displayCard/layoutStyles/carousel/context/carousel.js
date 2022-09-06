import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    test: 1,
  },
  reducers: {
    method: (state, action) => {
      state.matchData.push(
        action.payload
      );
    },
  },
});

export const method =
  carouselSlice.actions.method;
export default carouselSlice.reducer;
