import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, userStateReducer } from './filterSlice';
import { contactsApi } from './contacts/contactsApi';
import theme from './theme/themeSlice';
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
import { authApi } from './auth/authApi';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'darkTheme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userStateReducer),
    filter: filterReducer,
    theme,
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
