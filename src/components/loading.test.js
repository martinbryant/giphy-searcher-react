import * as container from './loading';

describe('Loading tests', () => {
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
            loadedGifList: [],
            loadingError: '',
            loadingStatus: false
        }
        expect(container.mapStateToProps(state)).toBe(expected);
    })
})