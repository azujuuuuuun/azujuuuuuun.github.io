import React from 'react'
import renderer from 'react-test-renderer'

import Links from '../Links'

describe('Links', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Links />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
