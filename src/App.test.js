import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';


import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<App />);

describe('App component tests', () => {
  it('renders a div', () => {
    expect(component().find('div').length).toBe(1);
  });
  it('with a class of "container" ', () => {
    expect(component().find('div').hasClass('container')).toBe(true);
  });


  // ReactDOM.unmountComponentAtNode(div);
});
