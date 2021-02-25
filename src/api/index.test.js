import * as api from "./index";
const MODULE = "[API]";

test(`${MODULE} getInitialMatches`, () => {
  const result = api.getInitialMatches();
  expect(result).toHaveLength(5);
});

test(`${MODULE} getUpdatedValues`, () => {
  const stub = [
    { homeScore: 0, awayScore: 0 },
    { homeScore: 1, awayScore: 2 },
  ];
  const nan = NaN;
  const result = api.getUpdatedValues(stub);
  expect(result.map((x) => x.homeScore)).toEqual(
    expect.not.arrayContaining([nan])
  );
  expect(result.map((x) => x.awayScore)).toEqual(
    expect.not.arrayContaining([nan])
  );
});
