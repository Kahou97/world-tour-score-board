import { spawn, all } from 'redux-saga/effects';
import home from './home';
const sagas = [home];

export default function* rootSaga() {
  yield all(sagas.map((saga) => spawn(saga)));
}