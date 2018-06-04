import * as container from './loading';
import { getMoreGifsStarted } from '../actions/actions';

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
        expect(container.mapStateToProps(state)).toEqual(expected);
    });
    it('mapDispatchToProps should return correct props', () => {
        const expected = {
            loadMoreGifs: getMoreGifsStarted
        }
        expect(container.mapDispatchToProps).toEqual(expected);
    })
})