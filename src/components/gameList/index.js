import React from "react";
import PropTypes from "prop-types";

export default function GameList({ game }) {
  return (
    <div>
      <div>
        {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
      </div>
    </div>
  );
}
