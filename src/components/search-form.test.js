import * as container from './search-form';
import { submitSearch } from '../actions/actions';

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
            searchError: ''
        }
        expect(container.mapStateToProps(state)).toEqual(expected);
    });
    it('mapDispatchToProps should return correct props', () => {
        const expected = {
            submitSearch
        }
        expect(container.mapDispatchToProps()).toEqual(expected);
    })
})