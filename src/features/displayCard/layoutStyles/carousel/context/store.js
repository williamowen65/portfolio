import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from './carousel'

export const store = configureStore({
  reducer: {
    carousel: carouselReducer
  }
})