import React from "react";
import PropTypes from "prop-types";

export default function GameList({ game }) {
  return (
    <div>
      <h2>Total Played Games</h2>
      <div>
        {x.homeTeam} {x.homeScore} - {x.awayTeam} {x.awayScore}
      </div>
    </div>
  );
}
