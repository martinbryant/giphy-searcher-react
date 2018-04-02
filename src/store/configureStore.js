import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducer';
import giphyApi from '../api/giphyApi';

const middleware = composeWithDevTools(applyMiddleware(
    thunk.withExtraArgument(giphyApi),
    reduxImmutableStateInvariant()
))

export default function configureStore(initialState) {
    return createStore(reducer, initialState, middleware());
}