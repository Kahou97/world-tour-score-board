import { createReducer } from '../utilsReducer';
import {INIT_HOME,GAMES_UPDATED, INIT_HOME_COMPLETED} from '../../actions/home';

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_HOME]: common, 
  [GAMES_UPDATED]: common,
  [INIT_HOME_COMPLETED]: common

});

function common(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}
