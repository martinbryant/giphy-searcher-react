import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchFormComponent from './search-form-component';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchForm Component tests', () => {
    const setup = (setupProps) => shallow(<SearchFormComponent {...setupProps} />);
    it('renders a div with a class name of search', () => {
        const component = setup({});
        const expected = component.find('.search')
        expect(expected.exists()).toBe(true);
    })
})