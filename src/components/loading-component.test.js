import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import LoadingComponent from './loading-component';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading Component tests', () => {
    const setup = (setupProps) => shallow(<LoadingComponent {...setupProps} />);
    it('renders a div with a class name of loading-section', () => {
        const component = setup({ loadedGifList: [], loadingError: '' });
        const expected = component.find('.loading-section')
        expect(expected.exists()).toBe(true);
    });
    it('renders load more button if load was successful', () => {
        const loadMoreGifs = jest.fn();
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: false,
            loadingError: '',
            loadMoreGifs
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(true);
        expect(expected.is('button')).toBe(true)
        expect(expected.text()).toBe('Load More')
        expected.simulate('click');
        expect(loadMoreGifs).toHaveBeenCalled()
    })
    it('does not render load more button if loading', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: true,
            loadingError: ''
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('does not render load more button when there is a loading error', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: false,
            loadingError: 'The returned network error'
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('does not render load more button when there are no gifs', () => {
        const component = setup({
            loadedGifList: [],
            loading: false,
            loadingError: ''
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('does not render load more button if isTrendingSearch', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: false,
            loadingError: '',
            isTrendingSearch: true
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('renders a spinner if loading', () => {
        const component = setup({
            loadedGifList: [],
            loading: true,
            loadingError: ''
        });
        const expected = component.find('.spinner');
        expect(expected.exists()).toBe(true);
        expect(expected.hasClass('spinner fas fa-spinner fa-spin fa-4x')).toBe(true)
    })
    it('does not render a spinner if not loading', () => {
        const component = setup({
            loadedGifList: [],
            loading: false,
            loadingError: ''
        });
        const expected = component.find('.spinner');
        expect(expected.exists()).toBe(false);
    })
    it('renders an error if there is a loading error', () => {
        const component = setup({
            loadedGifList: [],
            loading: false,
            loadingError: 'The returned network error'
        });
        const expected = component.find('.error-message');
        expect(expected.exists()).toBe(true);
        expect(expected.text()).toBe('The returned network error')
    })
    it('does not render an error if there is no error', () => {
        const component = setup({
            loadedGifList: [],
            loading: false,
            loadingError: ''
        });
        const expected = component.find('.error-message');
        expect(expected.exists()).toBe(false);
    })

})