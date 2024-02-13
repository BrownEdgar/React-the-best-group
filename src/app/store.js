import { configureStore } from '@reduxjs/toolkit'
import animalsReducer from '../features/animals/animalsSlice'
import photosReducer from '../features/photos/photosSlice'


const store = configureStore({
  reducer: {
    animals: animalsReducer,
    photos: photosReducer
  }
})

export default store