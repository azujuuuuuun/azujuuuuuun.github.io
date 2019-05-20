import React from 'react';
import renderer from 'react-test-renderer';

import Head from '../Head';

describe('Head', (): void => {
  it('renders correctly', (): void => {
    const props = { title: 'title' };
    const tree = renderer.create(<Head {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
