import fetchMock from 'fetch-mock';

import * as mid from './middleware'

describe('API Middleware tests', () => {
    let next, dispatch, getState, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        getState = jest.fn();
        middleware = mid.apiMiddleware({ dispatch, getState })(next);
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
            expect(dispatch.mock.calls[0][0].toMatchObject(expected));
        })
    });
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