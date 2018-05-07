import * as actions from '../actions/actions';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SUBMIT_SEARCH') {
        let searchError = validateSearchTerm(action.searchTerm)
        searchError
            ? dispatch(actions.submitSearchError(searchError))
            : dispatch(actions.submitSearchSuccess(action.searchTerm))
    }
    next(action)
    if (action.type === 'GET_NEW_GIFS_STARTED') {
        return fetch('api/test').then(res => res.json())
            .then(res => {
                gifResponseToGifUrlList(res);
            })
            .then(res => {
                dispatch(actions.getNewGifsSuccess(res))
            })
            .catch(err => {
                dispatch(actions.getNewGifsFailure(err))
            });
    }
    if (action.type === 'GET_MORE_GIFS_STARTED') {
        return fetch('api/test').then(res => res.json())
            .then(res => {
                gifResponseToGifUrlList(res);
            })
            .then(res => {
                dispatch(actions.getMoreGifsSuccess(res))
            })
            .catch(err => {
                dispatch(actions.getMoreGifsFailure(err));
            })
    }
    if (action.type === 'GET_TRENDING_GIFS_STARTED') {
        return fetch('api/test').then(res => res.json())
            .then(res => {
                gifResponseToGifUrlList(res);
            })
            .then(res => {
                dispatch(actions.getTrendingGifsSuccess(res))
            })
            .catch(err => {
                dispatch(actions.getTrendingGifsFailure(err));
            })
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

export {
    gifResponseToGifUrlList
}