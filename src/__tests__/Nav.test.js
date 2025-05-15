import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

// components
import App from '../containers/App';
import Nav from '../components/Nav';

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

describe('Testing Nav component', () => {
  it('renders the navigation', () => {
    const nav = document.createElement('nav');
    ReactDOM.render(<App />, nav);
    ReactDOM.unmountComponentAtNode(nav);
  });

  it('should render 5 NavLink elements', () => {
    expect(wrapper.find('NavLink')).toHaveLength(5);
  });

  it('it should match the Nav snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});