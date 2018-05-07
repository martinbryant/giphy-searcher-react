export const submitSearch = searchTerm => ({
    type: 'SUBMIT_SEARCH',
    searchTerm
});

export const submitSearchSuccess = searchTerm => ({
    type: 'SUBMIT_SEARCH_SUCCESS',
    searchTerm
});

export const submitSearchError = searchError => ({
    type: 'SUBMIT_SEARCH_ERROR',
    searchError
})

export const loadMoreGifs = () => ({
    type: 'LOAD_MORE_GIFS'
});

export const getNewGifsStarted = () => ({
    type: 'GET_NEW_GIFS_STARTED'
});

export const getNewGifsSuccess = gifList => ({
    type: 'GET_NEW_GIFS_SUCCESS',
    gifList
});

export const getNewGifsFailure = error => ({
    type: 'GET_NEW_GIFS_FAILURE',
    error
})

export const getMoreGifsStarted = () => ({
    type: 'GET_MORE_GIFS_STARTED'
})

export const getMoreGifsSuccess = gifList => ({
    type: 'GET_MORE_GIFS_SUCCESS',
    gifList
})

export const getMoreGifsFailure = error => ({
    type: 'GET_MORE_GIFS_FAILURE',
    error
})

export const getTrendingGifsStarted = () => ({
    type: 'GET_TRENDING_GIFS_STARTED'
})

export const getTrendingGifsSuccess = gifList => ({
    type: 'GET_TRENDING_GIFS_SUCCESS',
    gifList
})

export const getTrendingGifsFailure = error => ({
    type: 'GET_TRENDING_GIFS_FAILURE',
    error
})
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

export const apiRequestGifList = () => fetch('api/test').then(res => res.json());

export const getGifList = () => {
    return dispatch => {
        dispatch(getGifListStarted());
        return apiRequestGifList().then((res) => {
            dispatch(getGifListSuccess(res))
        }).catch(err => {
            dispatch(getGifListFailure(err))
        });
    }
}
