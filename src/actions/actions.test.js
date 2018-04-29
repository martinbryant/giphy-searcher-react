
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

describe('Action creator tests ', () => {
    it('creates an action for Submit Search', () => {
        const searchTerm = 'new search'
        const expected = {
            type: 'SUBMIT_SEARCH',
            searchTerm: 'new search'
        }
        expect(actions.submitSearch(searchTerm)).toEqual(expected);
    });
    it('creates an action for Get New Gifs Started', () => {
        const expected = {
            type: 'GET_NEW_GIFS_STARTED'
        }
        expect(actions.getNewGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get New Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_NEW_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getNewGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get New Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_NEW_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getNewGifsFailure(error)).toEqual(expected);
    });
    it('creates an action for Get More Gifs Started', () => {
        const expected = {
            type: 'GET_MORE_GIFS_STARTED'
        }
        expect(actions.getMoreGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get More Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_MORE_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getMoreGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get More Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_MORE_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getMoreGifsFailure(error)).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Started', () => {
        const expected = {
            type: 'GET_TRENDING_GIFS_STARTED'
        }
        expect(actions.getTrendingGifsStarted()).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Success', () => {
        const gifList = ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
            'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        const expected = {
            type: 'GET_TRENDING_GIFS_SUCCESS',
            gifList
        }
        expect(actions.getTrendingGifsSuccess(gifList)).toEqual(expected);
    });
    it('creates an action for Get Trending Gifs Failure', () => {
        const error = Error('Network Error')
        const expected = {
            type: 'GET_TRENDING_GIFS_FAILURE',
            error: Error('Network Error')
        }
        expect(actions.getTrendingGifsFailure(error)).toEqual(expected);
    });

});

// describe('gifResponseToGifUrlList tests ', () => {
//     it('turns a valid gifResponse to an array of gif Urls', () => {
//         const gifResponse = gifRes;
//         const expected = ["http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
//             "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif"]
//         expect(actions.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
//     });
//     it('turns an invalid gifResponse to an Error', () => {
//         const gifResponse = [];
//         const expected = new TypeError("Cannot read property \'map\' of undefined");
//         expect(actions.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
//     });

// });
// describe('getGifList tests', () => {
//     const middlewares = [thunk];
//     const mockStore = configureMockStore(middlewares);
//     const store = mockStore({});


//     afterEach(() => {
//         store.clearActions();
//         fetchMock.restore()
//     })
//     it('should dispatch getGifListStarted action', () => {
//         fetchMock.get('*', {});
//         const expected = actions.getGifListStarted();
//         return store.dispatch(actions.getGifList()).then(() => {
//             expect(store.getActions()).toContainEqual(expected);
//         });
//     });
//     it('should dispatch getGifListSuccess action if successful response', () => {
//         fetchMock.get('*', { body: gifRes });
//         const gifList = gifRes;
//         const expected = actions.getGifListSuccess(gifList)
//         return store.dispatch(actions.getGifList()).then((res) => {
//             expect(store.getActions()).toContainEqual(expected);
//         });

//     });
//     it('should dispatch getGifListFailure action if unsuccessful response', () => {
//         fetchMock.get('*', { status: 404 });
//         const expected = actions.getGifListFailure(new TypeError('Cannot read property \'on\' of undefined'));
//         return store.dispatch(actions.getGifList()).then((res) => {
//             expect(store.getActions()).toContainEqual(expected);
//         });

//     });

// });


// spy on dispatch called with relevant action

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