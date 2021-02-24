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
    const rnd1 = Math.floor(Math.random() * 3) + 1  ;
    const rnd2 = Math.floor(Math.random() * 3) + 1  ;
    return { home: scores.homeScore + rnd1, away: scores.awayScore + rnd2 };
  });
}
