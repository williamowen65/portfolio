import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    mobile: false,
    theme: 'default',
    sidenavToggle: false,
    minimized: true,
    pageLoaded: true,
    opening: "Dfsdf",
  },
  reducers: {
    toggle: (state, action) => {
      state.matchData.push(action.payload)
    },
    minimize: () => { },
    changeTheme: () => { }
  }
})

export const toggle = navbarSlice.actions.toggle
export const minimize = navbarSlice.actions.minimize
export const changeTheme = navbarSlice.actions.changeTheme
export default navbarSlice.reducer