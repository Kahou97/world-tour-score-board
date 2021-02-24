const MODULE = '[HOME]';
export const INIT_HOME = `${MODULE}INIT`;
export const INIT_HOME_COMPLETED = `${MODULE}INIT_COMPLETED`
export const UPDATE_GAMES = `${MODULE}UPDATE_GAMES`;
export const GAMES_UPDATED = `${MODULE}GAMES_UPDATED`;

export function initHome() {
    return {
        type: INIT_HOME
    }
}