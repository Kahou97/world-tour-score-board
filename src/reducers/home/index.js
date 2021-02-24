import { createReducer } from '../utilsReducer';
import {INIT_HOME, UPDATED_GAMES, INIT_HOME_COMPLETED, ADD_GAME, ENDED_GAME} from '../../actions/home';

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_HOME]: common, 
  [UPDATED_GAMES]: common,
  [INIT_HOME_COMPLETED]: common,
  [ADD_GAME]: common,
  [ENDED_GAME]: common

});

function common(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}
