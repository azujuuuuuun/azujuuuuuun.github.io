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
        <a href="https://github.com/azujuuuuuun" target="_blank">GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/azujuuuuuun" target="_blank">Twitter</a>
      </li>
      <li>
        <a href="https://qiita.com/azujuuuuuun" target="_blank">Qiita</a>
      </li>
      <li>
        <a href="https://booklog.jp/users/azujuuuuuun" target="_blank">ブクログ</a>
      </li>
      <li>
        <a href="https://eiga.com/mypage/753513/" target="_blank">映画.com</a>
      </li>
    </ul>
  </Layout>
)
