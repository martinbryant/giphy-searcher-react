import { combineReducers } from 'redux';

const searchTerm = (state = "", action) => {
    switch (action.type) {
        case 'SUBMIT_SEARCH':
            return action.searchTerm === '' ? state : action.searchTerm
        default:
            return state
    }
}

const searchError = (state = "", action) => {
    switch (action.type) {
        case 'SUBMIT_SEARCH':
            return action.searchTerm === '' ? 'Search cannot be blank' : ''
        default:
            return state;
    }
}

const gifsRequired = (state = 5, action) => state

const loadedGifList = (state = [], action) => state

const newGifsRecieved = (state = [], action) => state

const loadingStatus = (state = false, action) => {
    switch (action.type) {
        case 'GET_GIF_LIST_STARTED':
            return true;
        default: return state
    }
}


const reducer = combineReducers({
    searchTerm,
    searchError,
    gifsRequired,
    loadedGifList,
    newGifsRecieved,
    loadingStatus
})

export default reducer;