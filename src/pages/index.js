import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export default () => (
  <Layout isHome>
    <Helmet>
      <meta charSet="utf-8" />
      <title>azujuuuuuun.github.io</title>
    </Helmet>
    <p>Hello, world!</p>
    <ul>
      <li>
        <Link to="/about">自己紹介</Link>
      </li>
      <li>
        <Link to="/skills">スキル</Link>
      </li>
      <li>
        <Link to="/favorites">好きなもの</Link>
      </li>
      <li>
        <Link to="/links">リンク</Link>
      </li>
    </ul>
  </Layout>
)
