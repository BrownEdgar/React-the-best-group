import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAnimals from "./getAnimalsAPI";


export const getAnimalsAsync = createAsyncThunk('animals/getAsync', getAnimals)

const initialState = {
  data: [],
  loading: false,
  error: null
}

const animalsSlice = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnimalsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAnimalsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getAnimalsAsync.pending, (state) => {
        state.loading = true;
      })
  },
  selectors: {
    getAllAnimals: (state) => state.data
  }
})

export const { getAllAnimals } = animalsSlice.selectors;
export default animalsSlice.reducer;