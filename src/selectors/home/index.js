import { createSelector } from "reselect";

const currentGames = (state) => {
    return state.home.currentGames;
};

const totalGames = (state) => {
    return state.home.totalGames;
};

export const currentGamesSelector = createSelector([currentGames], games => games);
export const totalGamesSelector = createSelector([totalGames], games => games);