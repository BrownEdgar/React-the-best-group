import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getPhotos from './photosAPI';

const initialStateValue = {
  data: [],
  status: 'idle',
  page: 1,
  perpage: 24,
  error: null,
  total: 0
}
export const getAsyncPhotos = createAsyncThunk("photos/server", getPhotos)


const photosSlice = createSlice({
  name: 'photos',
  initialState: initialStateValue,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAsyncPhotos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAsyncPhotos.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
        state.total = action.payload.length
      })
      .addCase(getAsyncPhotos.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error
      })
  },
  selectors: {
    getAllPhotos: (state) => state,
    getLimitedPhotos: ({ data, page, perpage }) => {
      const x = (page * perpage);
      return data.slice(x - perpage, x)
    },
    getTotal: ({ total }) => total,
    getOptions: ({ page, perpage }) => ({ page, perpage }),
  }
})


export default photosSlice.reducer;
export const { updatePage } = photosSlice.actions;
export const { getAllPhotos, getLimitedPhotos, getTotal, getOptions } = photosSlice.selectors;