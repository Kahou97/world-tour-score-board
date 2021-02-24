import React from "react";
import PropTypes from "prop-types";
import PlayingGame from "../../components/playingGame";
import GameList from "../../components/gameList";
import { initHome } from "../../actions/home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export function Home({ onInit, currentGames, totalGames }) {
  return (
    <div>
      <div>
        <button>Start a Game</button>
        <button>Update Current Games</button>
      </div>

      {currentGames.map((x) => (
        <PlayingGame game={x} />
      ))}

      {totalGames
        .sort((a, b) => {
          return a.homeScore + a.awayScore > b.homeScore + b.awayScore
            ? 1
            : a.homeScore + a.awayScore < b.homeScore + b.awayScore
            ? -1
            : 0;
        })
        .map((x) => (
          <GameList game={x} />
        ))}
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onInit: initHome }, dispatch);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
