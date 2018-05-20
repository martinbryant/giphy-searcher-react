import React from 'react';

const LoadingComponent = ({ loading, loadingError, loadedGifList }) => {
    return (
        <div className="loading-section">
            {(loadedGifList.length > 0 && !loading && !loadingError) && <div className="load-more-button"></div>}
        </div>
    )
}

export default LoadingComponent;