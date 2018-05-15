import * as actions from '../actions/actions';

export const searchMiddleware = ({ dispatch, getState }) => next => action => {
    const getFromApiWithStore = getFromApi(dispatch, getState());
    if (action.type === 'SUBMIT_SEARCH') {
        let searchError = validateSearchTerm(action.searchTerm)
        searchError
            ? dispatch(actions.submitSearchError(searchError))
            : dispatch(actions.submitSearchSuccess(action.searchTerm))
    }
    next(action);

    (action.type === 'SUBMIT_SEARCH_SUCCESS') &&
        dispatch(actions.getNewGifsStarted(action.searchTerm));

    if (action.type === 'GET_NEW_GIFS_STARTED') {
        const { getNewGifsSuccess, getNewGifsFailure } = actions;
        return getFromApiWithStore(getNewGifsSuccess, getNewGifsFailure)
    }
    if (action.type === 'GET_MORE_GIFS_STARTED') {
        const { getMoreGifsSuccess, getMoreGifsFailure } = actions;
        return getFromApiWithStore(getMoreGifsSuccess, getMoreGifsFailure)
    }
    if (action.type === 'GET_TRENDING_GIFS_STARTED') {
        const { getTrendingGifsSuccess, getTrendingGifsFailure } = actions;
        return getFromApiWithStore(getTrendingGifsSuccess, getTrendingGifsFailure);
    }
}

const gifResponseToGifUrlList = gifResponse => {
    try {
        return gifResponse.data.map(n => n.images.fixed_width_downsampled.url)
    } catch (err) {
        return err
    }
}

const validateSearchTerm = searchTerm => searchTerm === '' ? 'Search term cannot be blank!' : ''

const calculateGifUrl = (limit, searchTerm, offset) => {
    const searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
    const trendingUrl = 'http://api.giphy.com/v1/gifs/trending?limit=';
    const apiKey = '&api_key=FnWOsAt1MrjCleoqgtcZS57GN8HjKn0j';
    if (!searchTerm && !offset) {
        return trendingUrl + limit + apiKey
    } else {
        return searchUrl
            + searchTerm
            + '&limit='
            + limit
            + '&offset='
            + offset
            + apiKey
    }
}

const getFromApi = (dispatch, state) => (successAction, failureAction) => {
    const { gifsRequired, searchTerm, loadedGifList } = state;
    const offset = loadedGifList.length;

    const url = calculateGifUrl(gifsRequired, searchTerm, offset)
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            gifResponseToGifUrlList(res);
        })
        .then(res => {
            dispatch(successAction(res))
        })
        .catch(err => {
            dispatch(failureAction(err))
        })
}

export {
    gifResponseToGifUrlList,
    validateSearchTerm,
    calculateGifUrl,
    getFromApi
}