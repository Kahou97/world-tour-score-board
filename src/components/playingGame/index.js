import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function PlayingGame({ game, onEnd }) {
  return (
    <div>
      {game.homeTeam} - {game.awayTeam}: {game.homeScore} - {game.awayScore}
      <button onClick={() => onEnd(game)}>End Game</button>
    </div>
  );
}
