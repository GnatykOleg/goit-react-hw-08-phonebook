import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  contactsReducer,
  loadingReducer,
  filterReducer,
} from './contacts/contacts-reducer';

import authReducerSlice from './auth/auth-slice';

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
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  logger,
];

const authPeristConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['_persist'],
};

const persistedAuthReducer = persistReducer(authPeristConfig, authReducerSlice);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persistedAuthReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
