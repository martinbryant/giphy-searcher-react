import expect from 'expect';

import reducer from './reducer';

describe('Reducer tests', () => {
    const oldState = {
        searchTerm: 'old search',
        searchError: '',
        gifsRequired: 5,
        loadedGifList: [],
        loadingError: '',
        loadingStatus: false
    }
    it('returns the initial state', () => {
        const expected = {
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: '',
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
            loadingError: '',
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
            loadingError: '',
            loadingStatus: false
        }
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: ''
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Get Gif List Started', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: '',
            loadingStatus: true
        }
        const action = {
            type: 'GET_GIF_LIST_STARTED'
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Get Gif List Success', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: '',
            loadingStatus: false
        }
        const action = {
            type: 'GET_GIF_LIST_SUCCESS',
            gifList: []
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
});