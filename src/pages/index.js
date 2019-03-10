import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Links from '../components/Links'

export default () => (
  <Layout isHome>
    <Helmet>
      <meta charSet="utf-8" />
      <title>azujuuuuuun.github.io</title>
    </Helmet>
    <p>Hello, world!</p>
    <Links />
  </Layout>
)
