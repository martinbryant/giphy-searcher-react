import * as actions from '../actions/actions';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    next(action)
    if (action.type === 'GET_NEW_GIFS_STARTED') {
        return fetch('api/test').then(res => res.json())
            .then(res => {
                dispatch(actions.getNewGifsSuccess(gifResponseToGifUrlList(res)))
            })
            .catch(err => {
                dispatch(actions.getNewGifsFailure(err))
            });
    }
}

const gifResponseToGifUrlList = gifResponse => {
    try {
        return gifResponse.data.map(n => n.images.fixed_width_downsampled.url)
    } catch (err) {
        return err
    }
}