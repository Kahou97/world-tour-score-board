const MODULE = '[HOME]';
export const INIT_HOME = `${MODULE}INIT`;
export const INIT_HOME_COMPLETED = `${MODULE}INIT_COMPLETED`
export const ADD_GAME = `${MODULE}ADD_GAMES`;
export const ADDED_GAMES = `${MODULE}ADDED_GAMES`;
export const UPDATE_GAMES = `${MODULE}UPDATE_GAMES`;
export const UPDATED_GAMES = `${MODULE}UPDATED_GAMES`;
export const ENDED_GAME = `${MODULE}ENDED_GAME`;

export function initHome() {
    return {
        type: INIT_HOME
    }
}

export function addGame(newGame, allGames){
    return {
        type: ADD_GAME,
        payload: {currentGames: [...allGames, newGame]}
    }
}

export function updateGames(){
    return {
        type: UPDATE_GAMES
    }
}

export function finishGame(game, currentGames, totalGames){
    currentGames.splice(currentGames.indexOf(game), 1);
    totalGames.push(game);
    return {
        type: ENDED_GAME, payload: {currentGames: [...currentGames], totalGames: [...totalGames]}
    }
}