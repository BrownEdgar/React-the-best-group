import { combineReducers, configureStore } from '@reduxjs/toolkit'
import animalsReducer from '../features/animals/animalsSlice'
import photosReducer from '../features/photos/photosSlice'
import CounterSlice from '../features/counter/CounterSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const rootReducer = combineReducers({
  animals: animalsReducer,
  photos: photosReducer,
  counter: CounterSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store