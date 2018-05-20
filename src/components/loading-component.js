import React from 'react';

const LoadingComponent = ({ loading, loadingError, loadedGifList }) => {
    return (
        <div className="loading-section">
            {(loadedGifList.length > 0 && !loading && !loadingError) && <div className="load-more-button"></div>}
            {loading && <div className="spinner fas fa-spinner fa-spin fa-4x"></div>}
            {loadingError && <div className="error-message"></div>}
        </div>
    )
}

export default LoadingComponent;