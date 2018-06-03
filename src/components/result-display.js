import { connect } from 'react-redux';

import ResultDisplayComponent from './result-display-component';

const mapStateToProps = ({ loadedGifList }) => ({
    loadedGifList
})

export const ResultDisplay = connect(mapStateToProps)(ResultDisplayComponent);

export {
    mapStateToProps
}