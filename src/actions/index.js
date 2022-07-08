export const playerName = (users) => {
    return {
        type: 'PLAYER_CREATE',
        payload: users
    }
}
export const playerWin = (countPlayer) => {
    return{
        type: 'PLAYER_WIN',
        payload: countPlayer
    }
}
export const playerWinSecond = (countPlayerSecond) => {
    return{
        type: 'PLAYERSECOND_WIN',
        payload: countPlayerSecond
    }
}
export const registeredPlayers = () => {
    return{
        type: 'REGISTERED_PLAYERS',
        payload: false
    }
}

