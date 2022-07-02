import { fork } from 'redux-saga/effects';

import homeSaga from 'pages/Home/saga';
import discoverSaga from 'pages/Discover/saga';

export default function* rootSaga() {
  yield fork(homeSaga);
  yield fork(discoverSaga);
}
