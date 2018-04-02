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
        case 'GET_GIF_LIST_SUCCESS':
            return [state,
                action.gifList
            ].reduce((a, b) => a.concat(b))
        default:
            return state;
    }
}

const loadingError = (state = '', action) => {
    switch (action.type) {
        case 'GET_GIF_LIST_FAILURE':
            return action.error
        case 'GET_GIF_LIST_STARTED':
            return ''
        default:
            return state;
    }
}

const loadingStatus = (state = false, action) => {
    switch (action.type) {
        case 'GET_GIF_LIST_STARTED':
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