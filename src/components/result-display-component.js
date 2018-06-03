import React from 'react'

const ResultDisplayComponent = ({ loadedGifList }) => {
    return (
        <div className="result-display">
            {loadedGifList.length > 0 &&
                <div className="result-grid">
                    {loadedGifList.map(gif => (<img key={gif} className="gif" src={gif} />))}
                </div>
            }
        </div>
    )
}

export default ResultDisplayComponent;