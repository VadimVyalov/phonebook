import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, tokenUserReducer } from './filterSlice';
import { contactsApi } from './contacts/contactsApi';

//import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
//import { tasksReducer } from './tasks/slice';

import { authReducer } from './auth/slice';
import { authApi } from './auth/authApi';

const authPersistConfig = {
  key: 'token',
  storage,
  // whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, tokenUserReducer),
    filter: filterReducer,
    //  auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: gDM =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, authApi.middleware),
});

export const persistor = persistStore(store);
