import { createSelector } from "reselect";
import {path} from 'ramda';

const currentGames = (state) => {
    return path(['home', 'data', 'currentGames'], state) || [];
};

const totalGames = (state) => {
    return path(['home', 'data', 'totalGames'], state) || [];
};

export const currentGamesSelector = createSelector([currentGames], games => games);
export const totalGamesSelector = createSelector([totalGames], games => games);