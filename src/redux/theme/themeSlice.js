import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: true,
  },
  reducers: {
    setDarkTheme: (state, { payload }) => {
      state.darkTheme = payload;
    },
  },
});

export const { setDarkTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

//=== SELECTOR ===
export const selectTheme = state => state.theme;
