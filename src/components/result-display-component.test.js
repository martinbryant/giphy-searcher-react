import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ResultDisplayComponent from './result-display-component';

Enzyme.configure({ adapter: new Adapter() });

describe('Result Display Component tests', () => {
    const setup = (setupProps) => shallow(<ResultDisplayComponent {...setupProps} />);
    it('renders a div with a class name of result-display', () => {
        const component = setup({ loadedGifList: [] });
        const expected = component.find('.result-display')
        expect(expected.exists()).toBe(true)
    })
    it('renders a div with a class name of result-grid if gifs exists', () => {
        const component = setup({
            loadedGifList: ['https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif',
                'https://media3.giphy.com/media/39qyWO7EM4Ov3fjyuj/200_d.gif']
        });
        const expected = component.find('.result-grid')
        expect(expected.exists()).toBe(true)
    })

})