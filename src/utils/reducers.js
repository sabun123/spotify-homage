import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from 'pages/Home/reducer';
import discoverReducer from 'pages/Discover/reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  discover: discoverReducer,
});

export default rootReducer;
