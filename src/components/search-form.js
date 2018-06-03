import { connect } from 'react-redux';

import SearchFormComponent from './search-form-component';

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({

})

export const ResultDisplay = connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}