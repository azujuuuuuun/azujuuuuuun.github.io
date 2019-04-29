import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

describe('Header', (): void => {
  it('renders correctly', (): void => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
