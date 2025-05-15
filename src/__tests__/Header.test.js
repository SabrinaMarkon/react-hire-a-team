import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import Header from '../components/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Testing Header component', () => {
  it('renders the header', () => {
    const header = document.createElement('header');
    ReactDOM.render(<Header />, header);
    ReactDOM.unmountComponentAtNode(header);
  });

  it('it should match the Header snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });
});