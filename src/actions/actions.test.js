
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

describe('Action creator tests ', () => {
    it('creates an action for Submit Search', () => {
        const expected = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'new search'
        }
        expect(actions.submitSearch('new search')).toEqual(expected);
    });
    it('creates an action for Search Success', () => {
        const expected = {
            type: 'SUBMIT_SEARCH_SUCESS',
            searchTerm: 'good search'
        }
        expect(actions.submitSearchSuccess('good search')).toEqual(expected);
    })
    it('creates an action for Search Error', () => {
        const expected = {
            type: 'SUBMIT_SEARCH_ERROR',
            searchError: 'Search cannot be blank'
        }
        expect(actions.submitSearchError('Search cannot be blank')).toEqual(expected)
    })
    it('creates an action for Get New Gifs Started', () => {
        const expected = {
            type: 'GET_NEW_GIFS_STARTED'
        }
        expect(actions.getNewGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get New Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_NEW_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getNewGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get New Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_NEW_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getNewGifsFailure(error)).toEqual(expected);
    });
    it('creates an action for Get More Gifs Started', () => {
        const expected = {
            type: 'GET_MORE_GIFS_STARTED'
        }
        expect(actions.getMoreGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get More Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_MORE_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getMoreGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get More Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_MORE_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getMoreGifsFailure(error)).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Started', () => {
        const expected = {
            type: 'GET_TRENDING_GIFS_STARTED'
        }
        expect(actions.getTrendingGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_TRENDING_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getTrendingGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_TRENDING_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getTrendingGifsFailure(error)).toEqual(expected);
    });

});