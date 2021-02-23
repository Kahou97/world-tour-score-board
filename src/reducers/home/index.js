import { createReducer } from '../utilsReducer';
import {INIT_HOME} from '../../actions/home';

const initialState = {
  data: {},
  meta: {},
  error: undefined,
};

export default createReducer(initialState, {
  [INIT_HOME]: common, 
});

function common(state, action) {
  return Object.assign({}, state, {
    data: Object.assign({}, state.data, action.payload),
    error: action.error,
  });
}
