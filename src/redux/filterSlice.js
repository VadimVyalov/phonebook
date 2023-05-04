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

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  // reducers: {
  //   setToken(_, { payload }) {
  //     return payload;
  // },
  // },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state = payload.result;
      }
    );
  },
});

// const tokenSlice = createSlice({
//   name: 'usersss',
//   initialState: { user: null, token: null },
//   reducers: {},
//   extraReducers: builder => {
//     builder.addMatcher(
//       authApi.endpoints.login.matchFulfilled,
//       (state, { payload }) => {
//         state.token = payload.result.token;
//         state.user = payload.result.user;
//       }
//     );
//   },
// });

//export default slice.reducer;

//export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
