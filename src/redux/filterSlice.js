import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    searchFilter(state, action) {
      return { ...state, filter: `${action.payload}` };
    },
  },
});

export const { searchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
