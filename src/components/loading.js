import { connect } from 'react-redux';

import LoadingComponent from './loading-component';

const mapStateToProps = ({ loadedGifList, loadingError, loadingStatus }) => {
    return {
        loadedGifList,
        loadingError,
        loadingStatus
    }

}

const mapDispatchToProps = (state) => {

}

export const Loading = connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}