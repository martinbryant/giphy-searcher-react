import React from 'react';

const LoadingComponent = ({ loading, loadingError, loadedGifList }) => {
    return (
        <div className="loading-section">
            {(loadedGifList.length > 0 && !loading && !loadingError) && <div className="load-more-button"></div>}
            <div className="spinner fas fa-spinner fa-spin fa-4x"></div>
        </div>
    )
}

export default LoadingComponent;