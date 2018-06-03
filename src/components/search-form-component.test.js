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
        expect(expected.is('div')).toBe(true);
    })
    it('renders a form with a class name of search-form and calls submitSearch onSubmit', () => {
        const submitSearch = jest.fn()
        const component = setup({ submitSearch });
        const expected = component.find('.search-form')
        expect(expected.exists()).toBe(true);
        expect(expected.is('form')).toBe(true)
        expected.simulate('submit');
        expect(submitSearch).toHaveBeenCalled()
    })
    it('renders a input with a class name of search-input and type of text', () => {
        const component = setup({});
        const expected = component.find('input').filterWhere(n => n.hasClass('search-input')
            && n.is('[type="text"]'))
        expect(expected.exists()).toBe(true);
    })
    it('renders a input with a class name of search-button and type of submit', () => {
        const component = setup({});
        const expected = component.find('input').filterWhere(n => n.hasClass('search-button')
            && n.is('[type="submit"]'))
        expect(expected.exists()).toBe(true);
    })
})