export const submitSearch = searchTerm => ({
    type: 'SUBMIT_SEARCH',
    searchTerm
});

export const loadMoreGifs = () => ({
    type: 'LOAD_MORE_GIFS'
});

export const getGifListStarted = () => ({
    type: 'GET_GIF_LIST_STARTED'
});

export const getGifListSuccess = gifList => ({
    type: 'GET_GIF_LIST_SUCCESS',
    gifList
});