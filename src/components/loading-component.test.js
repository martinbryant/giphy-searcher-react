import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import LoadingComponent from './loading-component';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading Component tests', () => {
    const setup = (setupProps) => shallow(<LoadingComponent {...setupProps} />);
    it('renders a div with a class name of loading-section', () => {
        const component = setup();
        const expected = component.find('div').first()
        expect(expected.hasClass('loading-section')).toBe(true);
    });
    it('renders load more button if load was successful', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: false,
            loadingError: false
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(true);
    })
    it('does not render load more button if loading', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: true,
            loadingError: false
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('does not render load more button when there is a loading error', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif'],
            loading: false,
            loadingError: true
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('does not render load more button when there are no gifs', () => {
        const component = setup({
            loadedGifList: [],
            loading: false,
            loadingError: false
        });
        const expected = component.find('.load-more-button');
        expect(expected.exists()).toBe(false);
    })
    it('renders a spinner if loading')
    it('does not render a spinner if not loading')
    it('renders an error if there is a loading error')
    it('does not render an error if there is no error')

})