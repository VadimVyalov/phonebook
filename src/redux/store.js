import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { userStateReducer } from './userAuth/userStateSlice';
import { contactsApi } from './contacts/contactsApi';
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
import { authApi } from './userAuth/authApi';
import { themeReducer } from './theme/themeSlice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'darkTheme',
  storage,
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userStateReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    filter: filterReducer,
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
