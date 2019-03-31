import React from 'react'
import { withPrefix } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

export default () => (
  <Layout>
    <Head title="自己紹介 | azujuuuuuun.github.io" />
    <h1>自己紹介</h1>
    <img src={withPrefix('/img/avatar.jpg')} alt="アバター" />
    <ul>
      <li>userId: azujuuuuuun</li>
      <li>username: jun</li>
    </ul>
  </Layout>
)
