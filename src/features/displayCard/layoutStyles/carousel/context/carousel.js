import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: {
    detail: {
      id: "",
      title: ""
    }
  },
  reducers: {
    setDetail: async (state, action) => {
      // console.log('action', action.payload);
      // console.log("state", state);
    },
  }
})

export const setDetail = carouselSlice.actions.setDetail
export default carouselSlice.reducer

// console.log(setDetail({ id: 342, title: 'dsfds' }));