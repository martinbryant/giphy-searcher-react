import expect from 'expect';

import * as actions from './actions';

describe('Action creator tests ', () => {
    it('creates an action to Submit Search', () => {
        const searchTerm = 'search'
        const expected = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'search'
        }
        expect(actions.submitSearch('search')).toEqual(expected);
    });
    it('creates an action to Load More Gifs', () => {
        const expected = {
            type: 'LOAD_MORE_GIFS'
        }
        expect(actions.loadMoreGifs()).toEqual(expected);
    });
    it('creates an action for Get Gif List Started', () => {
        const expected = {
            type: 'GET_GIF_LIST_STARTED'
        }
        expect(actions.getGifListStarted()).toEqual(expected);
    });
});