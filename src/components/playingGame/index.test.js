import Component from "./index";
import React from "react";
import renderer from "react-test-renderer";
const MODULE = '[COMPONENTS]'

test(`${MODULE} gameList`, () => {
  const game = {
    homeTeam: "home",
    homeScore: 0,
    awayTeam: "away",
    awayScore: 0,
  };
  const comp = renderer
    .create(<Component game={game} onEnd={() => {}} />)
    .toJSON();
  expect(comp).toMatchSnapshot();
});
