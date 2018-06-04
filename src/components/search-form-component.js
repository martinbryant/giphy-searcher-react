import React from 'react';

const SearchFormComponent = ({ searchError, submitSearch }) => {
    return (
        <div className="search">
            <form className="search-form" onSubmit={(e) => {
                e.preventDefault();
                submitSearch(e.target[0].value);
            }}>
                <input className="search-input" type="text" />
                <input className="search-button" type="submit" value="Search" />
            </form>
            {searchError &&
                <div className="search-error">{searchError}
                </div>
            }
        </div>
    )
}

export default SearchFormComponent;