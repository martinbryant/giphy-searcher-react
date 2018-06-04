import { connect } from 'react-redux';

import LoadingComponent from './loading-component';
import { getMoreGifsStarted } from '../actions/actions'

const mapStateToProps = ({ loadedGifList, loadingError, loadingStatus, searchTerm }) => ({
    loadedGifList,
    loadingError,
    loadingStatus,
    isTrendingSearch: searchTerm === ''
})

const mapDispatchToProps = {
    loadMoreGifs: getMoreGifsStarted
}

export const Loading = connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}