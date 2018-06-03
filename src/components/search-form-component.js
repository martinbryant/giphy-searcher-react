import React from 'react';

const SearchFormComponent = () => {
    return (
        <div className="search">
            <form className="search-form">
                <input className="search-input" type="text" />
                <input className="search-button" type="submit" />
            </form>
        </div>
    )
}

export default SearchFormComponent;