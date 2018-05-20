import React from 'react';

const LoadingComponent = ({ loading, loadingError, loadedGifList, loadMoreGifs }) => {
    return (
        <div className="loading-section">
            {(loadedGifList.length > 0 && !loading && !loadingError)
                && <button className="load-more-button" onClick={loadMoreGifs}>Load More</button>}
            {loading && <i className="spinner fas fa-spinner fa-spin fa-4x"></i>}
            {loadingError && <div className="error-message">{loadingError}</div>}
        </div>
    )
}

export default LoadingComponent;