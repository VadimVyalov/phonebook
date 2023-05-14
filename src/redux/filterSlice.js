import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

const initialState = {
  user: { name: '', email: '' },
  token: '',
  darkTheme: false,
  autoTheme: true,
  isLoggedIn: false,
};

const userStateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDarkTheme: (state, { payload }) => {
      state.darkTheme = payload; //!state.darkTheme;
    },
    setAutoTheme: (state, { payload }) => {
      state.autoTheme = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.regist.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.authentication.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.logout.matchFulfilled, () => initialState);
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const { setDarkTheme, setAutoTheme } = userStateSlice.actions;
export const userStateReducer = userStateSlice.reducer;
