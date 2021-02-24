import React from "react";
import PropTypes from "prop-types";
import styles from './index.module.scss';

export default function PlayingGame({ game, onEnd }) {
  return (
    <div className={styles.general}>
      {game.homeTeam} - {game.awayTeam}: {game.homeScore} - {game.awayScore}
      <button onClick={() => onEnd(game)}>End Game</button>
    </div>
  );
}

PlayingGame.propTypes = {
  game: PropTypes.shape({
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
  }).isRequired,
  onEnd: PropTypes.func.isRequired
}