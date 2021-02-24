import { spawn, takeEvery, call, put, select } from 'redux-saga/effects';
import { INIT_HOME, UPDATE_GAMES, INIT_HOME_COMPLETED, GAMES_UPDATED } from '../../actions/home';
import {getInitialMatches, getUpdatedValues} from '../../api'; 

export default function* homeSaga() {
  yield spawn(watchInitHome);
}

function* watchInitHome() {
  yield takeEvery(INIT_HOME, getMatch);
  yield takeEvery(UPDATE_GAMES, updateMatches);
}

export function* getMatch() {
  const data = getInitialMatches();
  yield put({type: INIT_HOME_COMPLETED, payload: {totalGames: data}});
  try {
  } catch (e) {
    console.error(e);
  }
}

export function* updateMatches() {
  try {
    const matches = yield select(state => state.home.currentGames);
    const data = getUpdatedValues();

    const updatedMatches =matches.map((match, index) => {
      match.homeScore = data[index].home;
      match.awayScore = data[index].away;
      return match;
    });

    yield put({type: GAMES_UPDATED, payload: {currentGames : updatedMatches}});
  } catch (e) {
    console.error(e);
  }
}