import { createReducer, createAction } from '@reduxjs/toolkit';

export const featuredRequest = createAction('home/featuredRequest');
export const featuredSuccess = createAction('home/featuredSuccess');
export const featuredFailed = createAction('home/featuredFailed');
export const releasedRequest = createAction('home/releasedRequest');
export const releasedSuccess = createAction('home/releasedSuccess');
export const releasedFailed = createAction('home/releasedFailed');

const initialState = {
  releasedThisWeek: [],
  featuredPlaylists: [],
  loadingFeatured: false,
  loadingPlaylists: false,
};

const discoverReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(releasedRequest, (state, action) => {
      state.loadingFeatured = true;
    })
    .addCase(releasedSuccess, (state, action) => {
      state.releasedThisWeek = action.payload;
      state.loadingFeatured = false;
    })
    .addCase(releasedFailed, (state, action) => {
      state.loadingFeatured = false;
    })
    .addCase(featuredRequest, (state, action) => {
      state.loadingPlaylists = true;
    })
    .addCase(featuredSuccess, (state, action) => {
      state.featuredPlaylists = action.payload;
      state.loadingPlaylists = false;
    })
    .addCase(featuredFailed, (state, action) => {
      state.loadingPlaylists = false;
    });
});

export default discoverReducer;
