import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// components
import App from '../containers/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('Testing main App component rendering', () => {
  it('should render a React Fragment in the App component.', () => {
    const fragment = document.createElement('Fragment');
    ReactDOM.render(<App />, fragment);
    ReactDOM.unmountComponentAtNode(fragment);
  });

  it('should render 1 child Nav component', () => {
    expect(wrapper.find('Nav')).toHaveLength(1);
  });

  it('should render 1 child Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  }); 

  it('should render 1 BrowserRouter element', () => {
    expect(wrapper.find('BrowserRouter')).toHaveLength(1);
  });
  
  it('should render 6 Route elements', () => {
    expect(wrapper.find('Route')).toHaveLength(6);
  });

  it('should render 1 child Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('it should match the App snapshot', () => {
    // If snapshot exists, compare. If not, create the snapshot.
    expect(wrapper).toMatchSnapshot();
  });

});