import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './navbarReducer.js'
import appReducer from '../../../context/appReducer.js'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    app: appReducer
  }
})