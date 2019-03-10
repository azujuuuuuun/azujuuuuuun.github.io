import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>リンク | azujuuuuuun.github.io</title>
    </Helmet>
    <h1>リンク</h1>
    <ul>
      <li>
        <a href="https://github.com/azujuuuuuun">GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/azujuuuuuun">Twitter</a>
      </li>
      <li>
        <a href="https://qiita.com/azujuuuuuun">Qiita</a>
      </li>
      <li>
        <a href="https://booklog.jp/users/azujuuuuuun">ブクログ</a>
      </li>
      <li>
        <a href="https://eiga.com/mypage/753513/">映画.com</a>
      </li>
    </ul>
  </Layout>
)
