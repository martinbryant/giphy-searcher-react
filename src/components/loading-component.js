import React from 'react';

const LoadingComponent = ({ loadingStatus, loadingError, loadedGifList, loadMoreGifs, isTrendingSearch }) => {
    return (
        <div className="loading-section">
            {(loadedGifList.length > 0 && !loadingStatus && !loadingError && !isTrendingSearch)
                && <button className="load-more-button" onClick={loadMoreGifs}>Load More</button>}
            {loadingStatus && <i className="spinner fas fa-spinner fa-spin fa-4x"></i>}
            {loadingError && <div className="error-message">{loadingError}</div>}
        </div>
    )
}

export default LoadingComponent;