import React from 'react';

const LoadingComponent = ({ loading, loadingError, loadedGifList }) => {
    return (
        <div className="loading-section">
            {(loadedGifList && !loading && !loadingError) && <div className="load-more-button"></div>}
        </div>
    )
}

export default LoadingComponent;