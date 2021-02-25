import reducer from './index';
import * as actions from '../../actions/home';

const MODULE='[REDUCERS]'

test(`${MODULE}`, () => {
  const startAction = {
    type: actions.INIT_HOME,
  };
  expect(reducer({}, startAction)).toStrictEqual({
    data: {},
    error: undefined,
  });
});