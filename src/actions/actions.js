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

export const gifResponseToGifUrlList = gifResponse => {
    gifResponse.data.map(n => n.images.fixed_width_downsampled.url)
}

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
