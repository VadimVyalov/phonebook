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

// const tokenSlice = createSlice({
//   name: 'user',
//   initialState: '',
//   reducers: {
//     setToken(state, { payload }) {
//       state.token = payload;
//     },
//   },
// });
const initialState = {
  user: { name: '', email: '' },
  token: '',
  status: '',
  isLoggedIn: false,
};

const tokenUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.regist.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.status = 'login';
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.status = 'login';
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
export const tokenUserReducer = tokenUserSlice.reducer;
