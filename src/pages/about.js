import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>自己紹介 | azujuuuuuun.github.io</title>
    </Helmet>
    <h1>自己紹介</h1>
    <img src={withPrefix('/img/avatar.jpg')} alt="アバター" />
    <ul>
      <li>userId: azujuuuuuun</li>
      <li>username: jun</li>
    </ul>
  </Layout>
)
