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
})