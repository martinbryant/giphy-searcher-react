import expect from 'expect';

import reducer from './reducer';

describe('Reducer tests ', () => {
    const oldState = {
        searchTerm: 'old search',
        searchError: '',
        gifsRequired: 5,
        loadedGifList: [],
        newGifsRecieved: [],
        loadingStatus: false
    }
    it('returns the initial state', () => {
        const expected = {
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            newGifsRecieved: [],
            loadingStatus: false
        }
        expect(reducer(undefined, {})).toEqual(expected);
    });
    it('should handle Submit Search with a string', () => {
        const expected = {
            searchTerm: 'a string',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            newGifsRecieved: [],
            loadingStatus: false
        }
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'a string'
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Submit Search with a blank string', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: 'Search cannot be blank',
            gifsRequired: 5,
            loadedGifList: [],
            newGifsRecieved: [],
            loadingStatus: false
        }
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: ''
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Load More Gifs ', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            newGifsRecieved: [],
            loadingStatus: true
        }
        const action = {
            type: 'LOAD_MORE_GIFS'
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
});