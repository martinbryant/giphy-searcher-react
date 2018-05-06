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

const loadedGifList = (state = [], action) => {
    switch (action.type) {
        case 'GET_NEW_GIFS_SUCCESS':
        case 'GET_MORE_GIFS_SUCCESS':
        case 'GET_TRENDING_GIFS_SUCCESS':
            return [state,
                action.gifList
            ].reduce((a, b) => a.concat(b))
        case 'GET_NEW_GIFS_STARTED':
            return []
        default:
            return state;
    }
}

const loadingError = (state = {}, action) => {
    switch (action.type) {
        case 'GET_GIF_LIST_FAILURE':
            return action.error
        case 'GET_NEW_GIFS_STARTED':
        case 'GET_MORE_GIFS_STARTED':
        case 'GET_TRENDING_GIFS_STARTED':
            return {}
        default:
            return state;
    }
}

const loadingStatus = (state = false, action) => {
    switch (action.type) {
        case 'GET_NEW_GIFS_STARTED':
        case 'GET_MORE_GIFS_STARTED':
        case 'GET_TRENDING_GIFS_STARTED':
            return true;
        default:
            return state
    }
}


const reducer = combineReducers({
    searchTerm,
    searchError,
    gifsRequired,
    loadedGifList,
    loadingError,
    loadingStatus
})

export default reducer;