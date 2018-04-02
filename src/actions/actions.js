export const submitSearch = searchTerm => ({
    type: 'SUBMIT_SEARCH',
    searchTerm
});

export const loadMoreGifs = () => ({
    type: 'LOAD_MORE_GIFS'
});