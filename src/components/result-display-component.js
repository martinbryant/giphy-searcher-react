import React from 'react'

const ResultDisplayComponent = ({ loadedGifList }) => {
    return (
        <div className="result-display">
            {loadedGifList.length > 0 &&
                <div className="result-grid">
                </div>
            }
        </div>
    )
}

export default ResultDisplayComponent;