import { combineReducers } from 'redux';

const searchTerm = (state = "", action) => state

const searchError = (state = "", action) => state

const gifsRequired = (state = 5, action) => state

const loadedGifList = (state = [], action) => state

const newGifsRecieved = (state = [], action) => state

const loadingStatus = (state = false, action) => state


const reducer = combineReducers({
    searchTerm,
    searchError,
    gifsRequired,
    loadedGifList,
    newGifsRecieved,
    loadingStatus
})

export default reducer;