import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    detail: {
      id: "",
      title: "",
    },
    carouselScrollNoTouch: {
      section: "",
      mousePos: [],
      dragging: false,
    },
  },
  reducers: {
    setDetail: async (
      state,
      action
    ) => {
      // console.log('action', action.payload);
      // console.log("state", state);
    },
    setCarouselScrollNoTouch: (
      state,
      action
    ) => {
      alert("hey");
    },
  },
});

export const setDetail =
  carouselSlice.actions.setDetail;
export const setCarouselScrollNoTouch =
  carouselSlice.actions
    .setCarouselScrollNoTouch;
export default carouselSlice.reducer;

// console.log(setDetail({ id: 342, title: 'dsfds' }));
