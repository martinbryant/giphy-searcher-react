import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';
import { resolve } from 'path';



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

});
describe('Action helper tests ', () => {
    it('turns a valid gifResponse to an array of gif Urls', () => {
        const gifResponse = gifRes;
        const expected = ["http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif",
            "http://media2.giphy.com/media/FiGiRei2ICzzG/200w_d.gif"]
        expect(actions.gifResponseToGifUrlList(gifResponse)).toEqual(expected);
    });
    it('turns an invalid gifResponse to an Error');
    it('getGifList dispatches getGifListStarted action');
    it('getGifList calls apiRequestGifList once'
        // var result = async () => {
        //     try {
        //         return await actions.apiRequestGifList();
        //     } catch (err) {
        //         return err;
        //     }
        // }
        // expect(result()).toEqual(Promise.resolve)
    );
    it('requestToApi dispatches getGifListSuccess action if successful');
    it('requestToApi dispatches getGifListSuccess action never if unsuccessful');
    it('requestToApi dispatches getGifListFailure action once if unsuccessful');
    it('requestToApi dispatches getGifListFailure action never if successful');

});
describe('getGifList tests', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({});


    afterEach(() => {
        store.clearActions();
        fetchMock.restore()
    })
    it('should dispatch getGifListStarted action', () => {
        fetchMock.get('*', {});
        const expected = actions.getGifListStarted();
        return store.dispatch(actions.getGifList()).then(() => {
            expect(store.getActions()).toContainEqual(expected);
        });
    });
    it('should dispatch getGifListSuccess action if successful response', () => {
        fetchMock.get('*', { body: gifRes });
        const gifList = gifRes;

        const expected = actions.getGifListSuccess(gifList)
        return store.dispatch(actions.getGifList()).then((res) => {
            expect(store.getActions()).toContainEqual(expected);
        });

    });


});


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