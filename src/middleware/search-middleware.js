import * as actions from '../actions/actions';

export const search = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === 'SUBMIT_SEARCH') {
        let searchError = validateSearchTerm(action.searchTerm);
        searchError
            ? next(actions.submitSearchError(searchError))
            : next(actions.getNewGifsStarted(action.searchTerm));
    }
}

const validateSearchTerm = searchTerm => searchTerm === '' ? 'Search term cannot be blank!' : ''