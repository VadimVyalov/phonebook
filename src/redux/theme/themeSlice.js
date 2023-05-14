import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: false,
  },
  reducers: {
    setDarkTheme: (state, { payload }) => {
      state.darkTheme = payload; //!state.darkTheme;
    },
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
