import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer', (): void => {
  it('renders correctly', (): void => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders isHome prop correctly', (): void => {
    const props = { isHome: true };
    const tree = renderer.create(<Footer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
