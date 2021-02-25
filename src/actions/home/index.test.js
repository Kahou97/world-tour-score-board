import * as actions from "./index";
const MODULE = "[ACTIONS]";

test(`${MODULE} addGame`, () => {
  const stubs = [];
  const newStub = "try";
  const action = actions.addGame(newStub, stubs);
  expect(action).toEqual({
    type: actions.ADD_GAME,
    payload: { currentGames: ["try"] },
  });
});

test(`${MODULE} finishGame`, () => {
  const stub = "try";
  const total = [];
  const current = [stub];
  const action = actions.finishGame(stub, current, total);
  expect(action).toEqual({
    type: actions.ENDED_GAME,
    payload: { currentGames: [], totalGames: ["try"] },
  });
});

test(`${MODULE} initHome`, () => {
  const action = actions.initHome();
  expect(action).toEqual({ type: actions.INIT_HOME });
});

test(`${MODULE} updateGames`, () => {
  const action = actions.updateGames();
  expect(action).toEqual({ type: actions.UPDATE_GAMES });
});
