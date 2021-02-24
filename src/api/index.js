export function getInitialMatches() {
  return [
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
    {
      homeTeam: "Germany",
      homeScore: 2,
      awayTeam: "France",
      awayScore: 2,
    },
    {
      homeTeam: "Uruguay",
      homeScore: 6,
      awayTeam: "Italy",
      awayScore: 6,
    },
    {
      homeTeam: "Argentina",
      homeScore: 3,
      awayTeam: "Australia",
      awayScore: 1,
    },
  ];
}

export function getUpdatedValues(currentGamesScores) {
  return currentGamesScores.map((scores) => {
    const rnd1 = Math.random() * 3;
    const rnd2 = Math.random() * 3;
    return { home: scores.home + rnd1, away: scores.away + rnd2 };
  });
}
