import React from 'react';
import renderer from 'react-test-renderer';

import Links from '../Links';

describe('Links', (): void => {
  it('renders correctly', (): void => {
    const tree = renderer.create(<Links />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
