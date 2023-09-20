import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
  error: null,
  filterCriteria: {
    brand: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  },
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    },
    updateFilterCriteria: (state, action) => {
      state.filterCriteria = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const advertsReducer = advertsSlice.reducer;
export const { 
  addToFavorites, 
  removeFromFavorites,
  updateFilterCriteria } = advertsSlice.actions;


