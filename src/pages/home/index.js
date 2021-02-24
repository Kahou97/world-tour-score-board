import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PlayingGame from "../../components/playingGame";
import GameList from "../../components/gameList";
import { addGame, finishGame, initHome, updateGames } from "../../actions/home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as selectors from "../../selectors/home";
import styles from './index.module.scss';

export function Home({
  onInit,
  addGame,
  updateGames,
  endGame,
  currentGames,
  totalGames,
}) {
  const [isNewGameAdded, setNewGameAdded] = useState(false);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => setNewGameAdded(true)}>Start a Game</button>
        <button onClick={updateGames}>Update Current Games</button>
        {isNewGameAdded && (
          <div>
            <div className={styles.space}>
              Home Team:
              <input
                type="text"
                onChange={(e) => setHomeTeam(e.target.value)}
              />
              {"  "}
              Away Team:
              <input
                type="text"
                onChange={(e) => setAwayTeam(e.target.value)}
              />
              <button
                onClick={() =>
                  {
                    setNewGameAdded(false);
                    addGame(
                    {
                      homeTeam: homeTeam,
                      awayTeam: awayTeam,
                      homeScore: 0,
                      awayScore: 0,
                    },
                    currentGames
                  )}
                }
              >
                Add Game
              </button>
            </div>
          </div>
        )}
      </div>
      <h2>Current Playing Games</h2>
      {currentGames.map((x, i, array) => (
        <PlayingGame
          key={i}
          game={x}
          onEnd={(game) => endGame(game, array, totalGames)}
        />
      ))}

      <h2>Total Played Games</h2>
      {totalGames
        .sort((a, b) => {
          return a.homeScore + a.awayScore > b.homeScore + b.awayScore
            ? -1
            : a.homeScore + a.awayScore < b.homeScore + b.awayScore
            ? 1
            : a.homeScore > b.homeScore
            ? -1
            : a.homeScore < b.homeScore
            ? 1
            : 0;
        })
        .map((x, i) => (
          <GameList key={i} game={x} />
        ))}
    </div>
  );
}

Home.propTypes = {
  currentGames: PropTypes.arrayOf({
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
  }).isRequired,
  totalGames: PropTypes.arrayOf({
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired
  }).isRequired,
  onInit: PropTypes.func.isRequired,
  addGame: PropTypes.func.isRequired,
  updateGames: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,

};

Home.defaultProps = {
  currentGames: [],
  totalGames: [],
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onInit: initHome,
      addGame: addGame,
      updateGames: updateGames,
      endGame: finishGame,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  currentGames: selectors.currentGamesSelector(state),
  totalGames: selectors.totalGamesSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
