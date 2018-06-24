import * as actions from '../actions/actions';

export const api = ({ getState }) => next => action => {
    next(action);

    const getFromApiWithStore = getFromApi(next, getState());

    switch (action.type) {
        case 'GET_NEW_GIFS_STARTED':
            {
                const { getNewGifsSuccess, getNewGifsFailure } = actions;
                return getFromApiWithStore(getNewGifsSuccess, getNewGifsFailure)
            }
        case 'GET_MORE_GIFS_STARTED':
            {
                const { getMoreGifsSuccess, getMoreGifsFailure } = actions;
                return getFromApiWithStore(getMoreGifsSuccess, getMoreGifsFailure)
            }
        case 'GET_TRENDING_GIFS_STARTED':
            {
                const { getTrendingGifsSuccess, getTrendingGifsFailure } = actions;
                return getFromApiWithStore(getTrendingGifsSuccess, getTrendingGifsFailure);
            }
        default: break
    }
}

const gifResponseToGifUrlList = gifResponse => {
    try {
        return gifResponse.data.map(n => n.images.fixed_width_downsampled.url)
    } catch (err) {
        return err
    }
}

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

const getFromApi = (next, { gifsRequired, searchTerm, loadedGifList }) => (successAction, failureAction) => {
    const nextSuccess = res => next(successAction(res))
    const nextFailure = err => next(failureAction(err));
    const offset = loadedGifList.length;
    const url = calculateGifUrl(gifsRequired, searchTerm, offset)
    return fetch(url)
        .then(convertToJson)
        .then(gifResponseToGifUrlList)
        .then(nextSuccess)
        .catch(nextFailure)
}

const convertToJson = res => res.json();

export {
    gifResponseToGifUrlList,
    calculateGifUrl,
    getFromApi
}