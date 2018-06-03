import React from 'react';

const SearchFormComponent = ({ submitSearch }) => {
    return (
        <div className="search">
            <form className="search-form" onSubmit={submitSearch}>
                <input className="search-input" type="text" />
                <input className="search-button" type="submit" />
            </form>
            <div className="search-error">
            </div>
        </div>
    )
}

export default SearchFormComponent;