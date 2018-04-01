import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';


import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<App />);

describe('App component tests', () => {
  it('renders an outer div with the class "container"', () => {
    expect(component().find('div').first().hasClass('container')).toBe(true);
  });
  it('renders a div with the class "title" ', () => {
    expect(component().find('div').filterWhere(n => n.hasClass('title')).length).toBe(1);
  });
  it('renders an h1 tag with the text "Giphy Searcher" ', () => {
    expect(component().find('h1').first().text()).toBe('Giphy Searcher');
  });
  it('renders a div with the class "search" ', () => {
    expect(component().find('div').filterWhere(n => n.hasClass('search')).length).toBe(1);
  })
  it('renders a form with the class "search-form" ', () => {
    expect(component().find('form').first().hasClass('search-form')).toBe(true);
  })
  it('renders an input with the class "search-input" ', () => {
    expect(component().find('input').filterWhere(n => n.hasClass('search-form') & n.type('text')).length).toBe(1);
  })
  it('renders an input with the class "search-button" and type "submit" ', () => {
    expect(component().find('input').filterWhere(n => n.hasClass('search-form') & n.type('submit')).length).toBe(1);
  })



});
