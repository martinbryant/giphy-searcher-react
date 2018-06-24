import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/reducer';
import { search } from '../middleware/search-middleware';
import { api } from '../middleware/api-middleware';

const middleware = composeWithDevTools(applyMiddleware(
    reduxImmutableStateInvariant(),
    search,
    api
))

export default function configureStore(initialState) {
    return createStore(reducer, initialState, middleware);
}