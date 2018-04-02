export const submitSearch = searchTerm => ({
    type: 'SUBMIT_SEARCH',
    searchTerm
});

export const loadMoreGifs = () => ({
    type: 'LOAD_MORE_GIFS'
});

export const getGifListNotAsked = () => ({
    type: 'GET_GIF_LIST_NOT_ASKED'
});

export const getGifListStarted = () => ({
    type: 'GET_GIF_LIST_STARTED'
});

export const getGifListSuccess = gifList => ({
    type: 'GET_GIF_LIST_SUCCESS',
    gifList
});

export const getGifListFailure = error => ({
    type: 'GET_GIF_LIST_FAILURE',
    error
});