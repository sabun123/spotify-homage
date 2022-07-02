import axios from 'axios';
import { Buffer } from 'buffer';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { authorizeRequest, authorizeSuccess, authorizeFailed } from './reducer';

function* authorizeUserSaga() {
  try {
    const store = yield select((state) => state.session);
    let redirect_uri = 'http://localhost:3000/';

    // form data
    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('code', store.spotifyCode);
    data.append('redirect_uri', redirect_uri);
    data.append('client_id', store.clientID);
    data.append('client_secret', store.clientSecret);

    const response = yield call(
      axios.post,
      'https://accounts.spotify.com/api/token',
      data,
      {
        headers: new Headers({
          Authorization:
            'Basic ' +
            Buffer.from(store.clientID + ':' + store.clientSecret).toString(
              'base64'
            ),
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      }
    );

    yield put(authorizeSuccess(response.data));
  } catch (e) {
    yield put(authorizeFailed());
  }
}

export default function* homeSaga() {
  yield takeLatest(authorizeRequest, authorizeUserSaga);
}
