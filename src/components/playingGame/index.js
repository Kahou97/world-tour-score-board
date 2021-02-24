import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function PlayingGame({ game }) {
  return (
    <div>
      <div>
        {game.homeTeam} - {game.awayTeam}: {game.homeScore} - {game.awayScore}
      </div>
      <button>End Game</button>
    </div>
  );
}
