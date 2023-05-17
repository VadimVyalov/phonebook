import { authApi } from './authApi';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: '', email: '' },
  token: '',

  isLoggedIn: false,
};
const userStateSlice = createSlice({
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
export const userStateReducer = userStateSlice.reducer;
