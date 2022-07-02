import { createReducer, createAction } from '@reduxjs/toolkit';

export const authorizeRequest = createAction('home/authorizeRequest');
export const authorizeSuccess = createAction('home/authorizeSuccess');
export const authorizeFailed = createAction('home/authorizeFailed');
export const setCode = createAction('home/setCode');
export const setClient = createAction('home/setClient');

const initialState = {
  clientID: '',
  clientSecret: '',
  sessionToken: null,
  refreshToken: null,
  spotifyCode: null,
  loading: false,
};

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authorizeRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(authorizeSuccess, (state, action) => {
      state.sessionToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.loading = false;
    })
    .addCase(authorizeFailed, (state, action) => {
      state.loading = false;
    })
    .addCase(setCode, (state, action) => {
      state.spotifyCode = action.payload;
    })
    .addCase(setClient, (state, action) => {
      state.clientID = action.payload.clientID;
      state.clientSecret = action.payload.clientSecret;
    });
});

export default sessionReducer;
