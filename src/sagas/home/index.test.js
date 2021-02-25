import * as saga from "./index";
import { runSaga } from "redux-saga";
import sinon from "sinon";
import * as api from "../../api";
import * as actions from "../../actions/home";

const MODULE = "[SAGAS]";

test(`${MODULE} getMatch`, (done) => {
  const dispatched = [];

  const data = api.getInitialMatches();

  const result = runSaga(
    {
      dispatch: (action) => dispatched.push(action),
      getState: () => ({}),
    },
    saga.getMatch
  ).toPromise();

  expect(dispatched).toHaveLength(1);
  done();
}, 1000);

test(`${MODULE} updateMatches`, (done) => {
  const dispatched = [];

  const games = [
    {
      homeTeam: "Mexico",
      homeScore: 0,
      awayTeam: "Canada",
      awayScore: 5,
    },
    {
      homeTeam: "Spain",
      homeScore: 10,
      awayTeam: "Brazil",
      awayScore: 2,
    },
  ];

  const result = runSaga(
    {
      dispatch: (action) => dispatched.push(action),
      getState: () => ({
        home: {
          data: { currentGame: games, totalGames: games },
        },
      }),
    },
    saga.updateMatches
  ).toPromise();

  expect(dispatched).toHaveLength(1);
  done();
}, 1000);
