import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';


import App from './App';
import { Loading } from './components/loading'
import { ResultDisplay } from './components/result-display'
import { SearchForm } from './components/search-form';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<App />);

describe('App component tests', () => {
  it('renders an outer div with the class "container"', () => {
    expect(component().find('div').first().hasClass('container')).toBe(true);
  });
  it('renders a div with the class "title"', () => {
    expect(component().find('div').filterWhere(n => n.hasClass('title')).length).toBe(1);
  });
  it('renders an h1 tag with the text "Giphy Searcher"', () => {
    expect(component().find('h1').first().text()).toBe('Giphy Searcher');
  });
  it('renders the search-form component', () => {
    expect(component().find(SearchForm).exists()).toBe(true);
  })
  it('renders the results-display component', () => {
    expect(component().find(ResultDisplay).exists()).toBe(true);
  })
  it('renders the loading component', () => {
    expect(component().find(Loading).exists()).toBe(true)
  })



});
