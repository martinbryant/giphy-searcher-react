import expect from 'expect';

import * as mid from './middleware'

describe('API Middleware tests', () => {
    let next, dispatch, getState, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        getState = jest.fn();
        middleware = mid.apiMiddleware({ dispatch, getState })(next);
    })
    it('should call next', () => {
        const action = {
            type: 'GET_NEW_GIFS_STARTED'
        };
        middleware(action);
        expect(next.mock.calls).toEqual([[action]])
    });

});