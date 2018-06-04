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
        const preventDefault = jest.fn()
        const component = setup({ submitSearch });
        const expected = component.find('.search-form')
        expect(expected.exists()).toBe(true);
        expect(expected.is('form')).toBe(true)
        const eventObject = {
            preventDefault,
            target: [{
                value: 'search'
            }]
        }
        expected.simulate('submit', eventObject);
        expect(preventDefault).toHaveBeenCalled();
        expect(submitSearch).toHaveBeenCalledWith('search')
    })
    it('renders a input with a class name of search-input and type of text', () => {
        const component = setup({});
        const expected = component.find('input').filterWhere(n => n.hasClass('search-input')
            && n.is('[type="text"]'))
        expect(expected.exists()).toBe(true);
    })
    it('renders a input with a class name of search-button, type of submit, value of Search', () => {
        const component = setup({});
        const expected = component.find('input').filterWhere(n => n.hasClass('search-button')
            && n.is('[type="submit"]')
            && n.is('[value="Search"]'))
        expect(expected.exists()).toBe(true);
    })
    it('renders a div with a class name of search-error if there is a search error', () => {
        const component = setup({ searchError: 'Search Error' });
        const expected = component.find('.search-error')
        expect(expected.exists()).toBe(true);
        expect(expected.text()).toBe('Search Error');
    })
    it('renders a div with a class name of search-error if there is a search error', () => {
        const component = setup({ searchError: '' });
        const expected = component.find('.search-error')
        expect(expected.exists()).toBe(false);
    })
})