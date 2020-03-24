import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_POST, FETCH_POST } from './types';
import { showLoading, hideLoading } from './actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoading());
  const payload = yield call(fetchPosts);
  yield put({ type: FETCH_POST, payload });
  yield put(hideLoading());
}

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return await response.json();
}
