import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import avatar from '../images/avatar.jpg'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>自己紹介 | azujuuuuuun.github.io</title>
    </Helmet>
    <h1>自己紹介</h1>
    <img src={avatar} alt="アバター" />
    <ul>
      <li>userId: azujuuuuuun</li>
      <li>username: jun</li>
    </ul>
  </Layout>
)
