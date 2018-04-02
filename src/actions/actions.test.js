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
});