import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    palyer : '',
    palyer1 : '',
    countWinPalyer: 0,
    countWinPalyer1: 0
}



const playersSlice = createSlice({
    name: 'palyer',
    initialState,
    reducers: {
        countWinPalyer: (state, action) =>{
            
        }
        heroCreated: (state, action) => {
            state.heroes.push(action.payload);
        },
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;