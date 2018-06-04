import * as container from './loading';
import { getMoreGifsStarted } from '../actions/actions';

describe('Loading tests', () => {
    it('mapStateToProps should return isTrendingSearch true when empty searchTerm', () => {
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
            loadingStatus: false,
            isTrendingSearch: true
        }
        expect(container.mapStateToProps(state)).toEqual(expected);
    })
    it('mapStateToProps should return isTrendingSearch false when any searchTerm', () => {
        const state = {
            searchTerm: 'search',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: '',
            loadingStatus: false
        }
        const expected = {
            loadedGifList: [],
            loadingError: '',
            loadingStatus: false,
            isTrendingSearch: false
        }
        expect(container.mapStateToProps(state)).toEqual(expected);
    })
    it('mapDispatchToProps should return correct props', () => {
        const expected = {
            loadMoreGifs: getMoreGifsStarted
        }
        expect(container.mapDispatchToProps).toEqual(expected);
    })
})