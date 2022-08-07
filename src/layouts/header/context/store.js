import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarReducer.js'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer
  }
})