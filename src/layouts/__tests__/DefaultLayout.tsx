import React from 'react';
import renderer from 'react-test-renderer';

import DefaultLayout from '../DefaultLayout';

describe('DefaultLayout', (): void => {
  it('renders correctly', (): void => {
    const tree = renderer.create(
      <DefaultLayout>
        <p>Hello, world!</p>
      </DefaultLayout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders isHome prop correctly', (): void => {
    const props = { isHome: true };
    const tree = renderer.create(
      <DefaultLayout {...props}>
        <p>Hello, world!</p>
      </DefaultLayout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
