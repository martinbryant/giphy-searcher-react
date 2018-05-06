import reducer from './reducer';

describe('Reducer tests', () => {
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
        const state = {
            searchTerm: 'old search',
            searchError: 'Search cannot be blank',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: false
        }
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
        expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle Submit Search with a blank string', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: false
        }
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
        expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle Get New Gifs Started', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: true
        }
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get More Gifs Started', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: true
        }
        const action = {
            type: 'GET_MORE_GIFS_STARTED'
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get Trending Gifs Started', () => {
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
            type: 'GET_TRENDING_GIFS_STARTED'
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get New Gifs Success', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif'],
            loadingError: {},
            loadingStatus: true
        }
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
            type: 'GET_NEW_GIFS_SUCCESS',
            gifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get More Gifs Success', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: true
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
            type: 'GET_MORE_GIFS_SUCCESS',
            gifList: ['https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif',
                'https://media1.giphy.com/media/3ohs7GPbaDx10LHIVG/200_d.gif']
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get Trending Gifs Success', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: true
        }
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
            type: 'GET_TRENDING_GIFS_SUCCESS',
            gifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get New Gifs Failure', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: true
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const action = {
            type: 'GET_NEW_GIFS_FAILURE',
            error: Error('The returned network error')
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get More Gifs Failure', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: {},
            loadingStatus: true
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const action = {
            type: 'GET_MORE_GIFS_FAILURE',
            error: Error('The returned network error')
        }
        expect(reducer(state, action)).toEqual(expected);
    })
    it('should handle Get Trending Gifs Failure', () => {
        const state = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: true
        }
        const expected = {
            searchTerm: 'old search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: Error('The returned network error'),
            loadingStatus: false
        }
        const action = {
            type: 'GET_TRENDING_GIFS_FAILURE',
            error: Error('The returned network error')
        }
        expect(reducer(state, action)).toEqual(expected);
    })
});