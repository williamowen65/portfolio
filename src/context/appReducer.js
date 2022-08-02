import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    screenWidth: null
  },
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload
    },
  }
})

export const setScreenWidth = appSlice.actions.setScreenWidth
export default appSlice.reducer