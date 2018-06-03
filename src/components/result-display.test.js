import * as container from './result-display';

describe('ResultDisplay tests', () => {
    it('mapStateToProps should return the correct props from state', () => {
        const state = {
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: '',
            loadingStatus: false
        }
        const expected = {
            loadedGifList: []
        }
        expect(container.mapStateToProps(state)).toEqual(expected);
    });

})