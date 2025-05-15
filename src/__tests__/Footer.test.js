import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Footer from '../components/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('Testing footer component', () => {
  it('renders the footer', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(<Footer />, footer);
    ReactDOM.unmountComponentAtNode(footer);
  });

  it('it should match the Footer snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});