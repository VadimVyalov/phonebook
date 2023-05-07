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

const tokenUserSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    token: '',
    status: '',
    isLoggedIn: false,
  },
  //initialState: { token: '' },

  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        // state.token = payload.token;
        state.user = payload.user;
        // state.status = 'Ок';
        // state.error = false;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    // .addMatcher(
    //   authApi.endpoints.login.matchRejected,
    //   (state, { payload }) => {
    //     console.log('state R:', state, 'payload ', payload);
    //     state.status = payload.status;
    //     state.error = true;
    //   }
    // );
  },
});

//export default slice.reducer;

//export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const { setToken } = tokenSlice.actions;
// export const tokenReducer = tokenSlice.reducer;

export const tokenUserReducer = tokenUserSlice.reducer;
