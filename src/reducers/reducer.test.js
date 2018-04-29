
import reducer from './reducer';

describe('Reducer tests', () => {
    const oldState = {
        searchTerm: 'old search',
        searchError: '',
        gifsRequired: 5,
        loadedGifList: [],
        loadingError: {},
        loadingStatus: false
    }
    it('returns the initial state', () => {
        const expected = {
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
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
            loadingError: {},
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
            loadingError: {},
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
            loadingError: {},
            loadingStatus: true
        }
        const action = {
            type: 'GET_GIF_LIST_STARTED'
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Get Gif List Started and clear any loadingError', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: true
        }
        const action = {
            type: 'GET_GIF_LIST_STARTED'
        }
        expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle Get Gif List Success and add recieved list to an empty list', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: false
        }
        const action = {
            type: 'GET_GIF_LIST_SUCCESS',
            gifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Get Gif List Success and add recieved list to the end of existing list', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: false
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif'],
            loadingError: {},
            loadingStatus: false
        }
        const action = {
            type: 'GET_GIF_LIST_SUCCESS',
            gifList: ['https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif']
        }
        expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle Get Gif List Failure', () => {
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const action = {
            type: 'GET_GIF_LIST_FAILURE',
            error: Error('The returned network error')
        }
        expect(reducer(oldState, action)).toEqual(expected);
    });
    it('should handle Get New Gifs Started')
    it('should handle Get More Gifs Started')
    it('should handle Get Trending Gifs Started')
    it('should handle Get New Gifs Success')
    it('should handle Get More Gifs Success')
    it('should handle Get Trending Gifs Success')
    it('should handle Get New Gifs Failure')
    it('should handle Get More Gifs Failure')
    it('should handle Get Trending Gifs Failure')
});