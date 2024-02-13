import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAnimals from './animalsAPI';


const initialStateValue = {
  data: [],
  status: 'idle',
  error: null
}

export const getAsyncAnimals = createAsyncThunk("animals/server", getAnimals)

const animalsSlice = createSlice({
  name: 'animals',
  initialState: initialStateValue,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAsyncAnimals.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAsyncAnimals.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload
      })
      .addCase(getAsyncAnimals.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error
      })
  },
  selectors: {
    getAllAnimals: (state) => state
  }

})

export default animalsSlice.reducer;
export const { getAllAnimals } = animalsSlice.selectors;
