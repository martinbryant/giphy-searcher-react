import React from 'react';

const SearchFormComponent = ({ searchError, submitSearch }) => {
    return (
        <div className="search">
            <form className="search-form" onSubmit={submitSearch}>
                <input className="search-input" type="text" />
                <input className="search-button" type="submit" />
            </form>
            {searchError &&
                <div className="search-error">{searchError}
                </div>
            }
        </div>
    )
}

export default SearchFormComponent;