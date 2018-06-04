import { connect } from 'react-redux';

import SearchFormComponent from './search-form-component';
import { submitSearch } from '../actions/actions'

const mapStateToProps = ({ searchError }) => ({
    searchError
})

const mapDispatchToProps = {
    submitSearch
}

export const SearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}