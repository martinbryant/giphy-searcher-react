import { connect } from 'react-redux';

import ResultDisplayComponent from './result-display-component';

const mapStateToProps = () => ({
})

export const ResultDisplay = connect(mapStateToProps)(ResultDisplayComponent);

export {
    mapStateToProps
}