import expect from 'expect';

import reducer from './reducer';

describe('Reducer tests ', () => {
    it('returns the initial state', () => {
        const expected = {
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            newGifsRecieved: []
        }
        expect(reducer(undefined, {})).toEqual(expected);
    });
});