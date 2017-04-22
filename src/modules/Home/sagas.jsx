
import * as config  from '../../../config';
import axios        from 'axios';

import * as actions from './actions';

import { call, put, fork, take, cancel, takeEvery, takeLatest } from 'redux-saga/effects';

function fetch(action) {
  const { page, limit } = action;
  return axios.get(`${ config.api.host }/users?page=${ page }&limit=${ limit }`);
}

function* attemptFetch(action) {
    try {
      const res = yield call(fetch, action);
      yield put({ type: actions.FETCH_USERS_SUCCESS, res: res.data });
    } catch(err) {
      yield put({ type: actions.FETCH_USERS_ERROR, err: err.response.data });
    }
    finally {
      yield put({ type: actions.FETCH_USERS_DONE });
    }
}

function* cancelTask(task) {
  yield cancel(task);
}

export default function* userSaga() {
  while(true) {
    const action = yield take(actions.FETCH_USERS);
    const task = yield fork(attemptFetch, action);
    yield fork(
      takeLatest,
      [actions.FETCH_USERS_CANCEL],
      cancelTask,
      task
    );
  }
}
