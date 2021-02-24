import React from "react";
import PropTypes from "prop-types";
import styles from './index.module.scss';

export default function GameList({ game }) {
  return (
    <div>
      <div className={styles.general}>
        {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
      </div>
    </div>
  );
}

GameList.propTypes = {
  game: PropTypes.shape({
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
  }).isRequired
}
