import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../slices/userSlice.js';

function* fetchUserSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    const user = response.data;
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}
