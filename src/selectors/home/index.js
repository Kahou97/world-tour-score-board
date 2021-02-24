import { createSelector } from "reselect";

const currentGames = (state) => {
    return state.home.data.currentGames;
};

const totalGames = (state) => {
    return state.home.data.totalGames;
};

export const currentGamesSelector = createSelector([currentGames], games => games);
export const totalGamesSelector = createSelector([totalGames], games => games);