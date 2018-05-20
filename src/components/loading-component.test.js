import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import LoadingComponent from './loading-component';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading Component tests', () => {
    it('renders a div with a class name of loading-section', () => {
        const component = shallow(<LoadingComponent />)
        const firstDiv = component.find('div').first()
        expect(firstDiv.hasClass('loading-section')).toBe(true);
    })
})