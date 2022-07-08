const initialState = {
    players : [],  
    winPlayer: 0,
    winPlayerSecond: 0,
    showRegisteredFlag: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER_WIN':
            return {
                ...state,
                winPlayer: action.payload
            }
        case 'PLAYERSECOND_WIN':
            return {
                ...state,
                winPlayerSecond: action.payload 
            }
        case 'PLAYER_CREATE':
            return {
                ...state,
                players: action.payload
            }
        case 'REGISTERED_PLAYERS':
            return{
                ...state,
                showRegisteredFlag: action.payload
            }
         
        default: return state
    }
}

export default reducer;