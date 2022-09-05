import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  fetchRefreshCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
  loading: false,
};

const authReducerSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedin = true;
      state.loading = false;
    },
    [register.pending](state, _) {
      state.loading = true;
    },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedin = true;
      state.loading = false;
    },
    [logIn.pending](state, _) {
      state.loading = true;
    },

    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
      state.loading = false;
    },
    [logOut.pending](state, _) {
      state.loading = true;
    },

    [fetchRefreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedin = true;
      state.loading = false;
    },
    [fetchRefreshCurrentUser.pending](state, _) {
      state.loading = true;
    },
  },
});

export default authReducerSlice.reducer;
