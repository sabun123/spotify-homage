import axios from 'axios';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import {
  releasedRequest,
  releasedSuccess,
  releasedFailed,
  featuredRequest,
  featuredSuccess,
  featuredFailed,
} from './reducer';

function* fetchNewReleasesSaga() {
  try {
    const store = yield select((state) => state.session);

    const response = yield call(
      axios.get,
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          Authorization: 'Bearer ' + store.sessionToken,
          'Content-Type': 'application/json',
        },
      }
    );

    yield put(releasedSuccess(response.data.albums.items));
  } catch (e) {
    yield put(releasedFailed());
  }
}

function* fetchFeaturedSaga() {
  try {
    const store = yield select((state) => state.session);

    const response = yield call(
      axios.get,
      'https://api.spotify.com/v1/browse/featured-playlists',
      {
        headers: {
          Authorization: 'Bearer ' + store.sessionToken,
          'Content-Type': 'application/json',
        },
      }
    );

    yield put(featuredSuccess(response.data.playlists.items));
  } catch (e) {
    yield put(featuredFailed());
  }
}

export default function* homeSaga() {
  yield takeLatest(releasedRequest, fetchNewReleasesSaga);
  yield takeLatest(featuredRequest, fetchFeaturedSaga);
}
