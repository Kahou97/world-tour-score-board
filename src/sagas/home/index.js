import { spawn, takeEvery, call, put, select } from 'redux-saga/effects';
import { INIT_HOME } from '../../actions/home';

export default function* homeSaga() {
  yield spawn(watchInitHome);
}

function* watchInitHome() {
  yield takeEvery(INIT_HOME, getMatch);
}

export function* getMatch() {
  try {
  } catch (e) {
    console.error(e);
  }
}