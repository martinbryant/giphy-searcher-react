import expect from 'expect';

import * as actions from './actions';

describe('Action creator tests ', () => {
    it('creates an action to Submit Search', () => {
        const expected = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'search'
        }
        expect(actions.submitSearch('search')).toEqual(expected);
    });
    it('creates an action to Load More Gifs', () => {
        const expected = {
            type: 'LOAD_MORE_GIFS'
        }
        expect(actions.loadMoreGifs()).toEqual(expected);
    });
    it('creates an action for Get Gif List Not Asked', () => {
        const expected = {
            type: 'GET_GIF_LIST_NOT_ASKED'
        }
        expect(actions.getGifListNotAsked()).toEqual(expected);
    });
    it('creates an action for Get Gif List Started', () => {
        const expected = {
            type: 'GET_GIF_LIST_STARTED'
        }
        expect(actions.getGifListStarted()).toEqual(expected);
    });
    it('creates an action for Get Gif List Success', () => {
        const gifList = {}
        const expected = {
            type: 'GET_GIF_LIST_SUCCESS',
            gifList
        }
        expect(actions.getGifListSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get Gif List Success', () => {
        const error = 'error message'
        const expected = {
            type: 'GET_GIF_LIST_FAILURE',
            error: 'error message'
        }
        expect(actions.getGifListFailure(error)).toEqual(expected);
    });
    it('turns a gifResponse to an array of gif Urls', () => {
        const gifResponse = gifRes;
        const expected = ["http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
            "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif"]
        expect(actions.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
    });
});

// response has an array called 'data'
// each item in array has a 'images' object
// 'images' object has a property 'fixed_height_downsampled'
// 'fixed_height_downsampled' has a property 'url'

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