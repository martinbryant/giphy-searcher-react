import fetchMock from 'fetch-mock';

import * as mid from './middleware'
import * as actions from '../actions/actions'

describe('Search Middleware tests', () => {
    let next, dispatch, getState, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        getState = () => ({
            searchTerm: '',
            searchError: '',
            gifsRequired: 5,
            loadedGifList: [],
            loadingError: {},
            loadingStatus: false
        });
        middleware = mid.searchMiddleware({ dispatch, getState })(next);
    })
    afterEach(() => {
        fetchMock.restore()
    })
    it('should call next with every action', () => {
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        };
        middleware(action);
        expect(next.mock.calls).toEqual([[action]])
    });
    it('should ignore non-api request actions', () => {
        const action = {
            type: 'NON-API-ACTION'
        }
        middleware(action);
        expect(dispatch.mock.calls.length).toEqual(0);
    })
    it('should call dispatch with getNewGifsSuccess action', () => {
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        };
        const expected = {
            type: 'GET_NEW_GIFS_SUCCESS'
        }
        fetchMock.get('*', { body: gifRes });
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected)
        });
    })
    it('should call dispatch with getNewGifsFailure action', () => {
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        };
        const expected = {
            type: 'GET_NEW_GIFS_FAILURE'
        }
        fetchMock.get('*', { status: 404 })
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected)
        });
    })
    it('should call dispatch with getMoreGifsSuccess action', () => {
        const action = {
            type: 'GET_MORE_GIFS_STARTED'
        }
        const expected = {
            type: 'GET_MORE_GIFS_SUCCESS'
        }
        fetchMock.get('*', { body: gifRes });
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected);
        });
    });
    it('should call dispatch with getMoreGifsFailure action', () => {
        const action = {
            type: 'GET_MORE_GIFS_STARTED'
        };
        const expected = {
            type: 'GET_MORE_GIFS_FAILURE'
        }
        fetchMock.get('*', { status: 404 })
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected)
        });
    })
    it('should call dispatch with getTrendingGifsSuccess action', () => {
        const action = {
            type: 'GET_TRENDING_GIFS_STARTED'
        }
        const expected = {
            type: 'GET_TRENDING_GIFS_SUCCESS'
        }
        fetchMock.get('*', { body: gifRes });
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected);
        });
    });
    it('should call dispatch with getTrendingGifsFailure action', () => {
        const action = {
            type: 'GET_TRENDING_GIFS_STARTED'
        };
        const expected = {
            type: 'GET_TRENDING_GIFS_FAILURE'
        }
        fetchMock.get('*', { status: 404 })
        return middleware(action).then(() => {
            expect(dispatch.mock.calls[0][0]).toMatchObject(expected)
        });
    })
    it('should dispatch action for a validated search term', () => {
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'good search'
        }
        const expected = {
            type: 'SUBMIT_SEARCH_SUCCESS'
        }
        middleware(action);
        expect(dispatch.mock.calls[0][0]).toMatchObject(expected);
    })
    it('should dispatch action for a search term error', () => {
        const action = {
            type: 'SUBMIT_SEARCH',
            searchTerm: ''
        }
        const expected = {
            type: 'SUBMIT_SEARCH_ERROR'
        }
        middleware(action);
        expect(dispatch.mock.calls[0][0]).toMatchObject(expected);
    })
    it('should dispatch action for getNewGifsStarted on submitSearchSuccess action', () => {
        const action = {
            type: 'SUBMIT_SEARCH_SUCCESS',
            searchTerm: 'good search'
        }
        const expected = {
            type: 'GET_NEW_GIFS_STARTED'
        }
        middleware(action);
        expect(dispatch.mock.calls[0][0]).toMatchObject(expected);
    })
});
describe('gifResponseToGifUrlList tests ', () => {
    it('turns a valid gifResponse to an array of gif Urls', () => {
        const gifResponse = gifRes;
        const expected = ["http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
            "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif"]
        expect(mid.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
    });
    it('turns an invalid gifResponse to an Error', () => {
        const gifResponse = [];
        const expected = new TypeError("Cannot read property \'map\' of undefined");
        expect(mid.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
    });
});
describe('calculateGifUrl tests', () => {
    it('should calculate correct url for gif search', () => {
        const searchUrl = 'http://api.giphy.com/v1/gifs/search?q=cat&limit=5&offset=10&api_key=FnWOsAt1MrjCleoqgtcZS57GN8HjKn0j';
        expect(mid.calculateGifUrl(5, 'cat', 10)).toEqual(searchUrl);
    })

    it('should calculate correct url for gif trending', () => {
        const trendingUrl = 'http://api.giphy.com/v1/gifs/trending?limit=10&api_key=FnWOsAt1MrjCleoqgtcZS57GN8HjKn0j';
        expect(mid.calculateGifUrl(10)).toEqual(trendingUrl);
    })
});
describe('getFromApi tests', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('should return a call to fetch', () => {
        const trendingUrl = 'http://api.giphy.com/v1/gifs/trending?limit=5&api_key=FnWOsAt1MrjCleoqgtcZS57GN8HjKn0j';
        const getState = {
            searchTerm: '',
            gifsRequired: 5,
            loadedGifList: []
        };
        const successAction = actions.getTrendingGifsSuccess
        const failureAction = actions.getTrendingGifsFailure;
        const dispatch = jest.fn();
        fetchMock.get(trendingUrl, { body: gifRes });
        return mid.getFromApi(dispatch, getState)(successAction, failureAction).then(() => {
            expect(fetchMock.done()).toEqual(true);
        })
    })
})

let gifRes = {
    "data": [
        {
            type: "gif",
            id: "FiGiRei2ICzzG",
            slug: "funny-cat-FiGiRei2ICzzG",
            url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
            bitly_gif_url: "http://gph.is/1fIdLOl",
            bitly_url: "http://gph.is/1fIdLOl",
            embed_url: "http://giphy.com/embed/FiGiRei2ICzzG",
            username: "",
            source: "http://tumblr.com",
            rating: "g",
            caption: "",
            content_url: "",
            source_tld: "tumblr.com",
            source_post_url: "http://tumblr.com",
            import_datetime: "2014-01-18 09:14:20",
            trending_datetime: "1970-01-01 00:00:00",
            images: {
                fixed_width_downsampled: {
                    url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
                    width: "200",
                    height: "70",
                    size: "71069",
                    webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.webp",
                    webp_size: "13186"
                }

            },
            title: "Funny Cat GIF",
        },
        {
            type: "gif",
            id: "FiGiRei2ICzzG",
            slug: "funny-cat-FiGiRei2ICzzG",
            url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
            bitly_gif_url: "http://gph.is/1fIdLOl",
            bitly_url: "http://gph.is/1fIdLOl",
            embed_url: "http://giphy.com/embed/FiGiRei2ICzzG",
            username: "",
            source: "http://tumblr.com",
            rating: "g",
            caption: "",
            content_url: "",
            source_tld: "tumblr.com",
            source_post_url: "http://tumblr.com",
            import_datetime: "2014-01-18 09:14:20",
            trending_datetime: "1970-01-01 00:00:00",
            images: {
                fixed_width_downsampled: {
                    url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
                    width: "200",
                    height: "70",
                    size: "71069",
                    webp: "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.webp",
                    webp_size: "13186"
                }

            },
            title: "Funny Cat GIF",
        }
    ],
    "meta": {
        "status": 200,
        "msg": "OK"
    },
    "pagination": {
        "total_count": 1947,
        "count": 25,
        "offset": 0
    }
}