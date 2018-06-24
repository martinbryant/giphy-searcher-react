import * as mid from './search-middleware';

describe('Search Middleware tests', () => {
    let next, dispatch, getState, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        getState = () => ({
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: false
        });
        middleware = mid.search({ dispatch, getState })(next);
    })
    it('should call next with every action', () => {
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        };
        middleware(action);
        expect(next).toBeCalled();
    });
    it('should call next with getNewGifsStarted for a validated search term', () => {
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'good search'
        }
        const expected = {
            type: 'GET_NEW_GIFS_STARTED'
        }
        middleware(action);
        expect(next).toBeCalledWith(expected);
    })
    it('should call next with submitSearchError for a search term error', () => {
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: ''
        }
        const expected = {
            type: 'SUBMIT_SEARCH_ERROR',
            searchError: "Search term cannot be blank!"
        }
        middleware(action);
        expect(next).toBeCalledWith(expected);
    })
})