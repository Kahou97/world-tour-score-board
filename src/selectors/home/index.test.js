import * as selectors from "./index";

const MODULE = "[SELECTORS]";
const state = {
  home: {
    data: {
      currentGames: [
        {
          homeTeam: "Mexico",
          homeScore: 0,
          awayTeam: "Canada",
          awayScore: 5,
        },
      ],
      totalGames: [
        {
          homeTeam: "Spain",
          homeScore: 10,
          awayTeam: "Brazil",
          awayScore: 2,
        },
      ],
    }
  }
};

test(`${MODULE} currentGamesSelector`, () => {
  expect(selectors.currentGamesSelector(state)).toEqual([
    {
      homeTeam: "Mexico",
      homeScore: 0,
      awayTeam: "Canada",
      awayScore: 5,
    },
  ]);
});

test(`${MODULE} totalGamesSelector`, () => {
  expect(selectors.totalGamesSelector(state)).toEqual([
    {
      homeTeam: "Spain",
      homeScore: 10,
      awayTeam: "Brazil",
      awayScore: 2,
    },
  ]);
});
