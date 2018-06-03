import { connect } from 'react-redux';

import LoadingComponent from './loading-component';

const mapStateToProps = (state) => {
    return {}

}

const mapDispatchToProps = (state) => {

}

export const Loading = connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}