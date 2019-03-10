import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>スキル | azujuuuuuun.github.io</title>
    </Helmet>
    <h1>スキル</h1>
    <h2>Works</h2>
    <h3>
      <a href="http://wkd.main.jp" target="_blank">早稲田大学弓道同好会ホームページ</a>
    </h3>
    <img src={withPrefix('/img/work1.png')} alt="早稲田大学弓道同好会ホームページ" />
    <p>
      早稲田大学弓道同好会のホームページです。
      Bootstrapを使って作りました。
      現在はサークルの後輩が更新しています。
    </p>
    <h3>
      <a href="https://azujuuuuuun.github.io">azujuuuuuun.github.io</a>
    </h3>
    <img src={withPrefix('/img/work2.png')} alt="azujuuuuuun.github.io" />
    <p>
      このサイトです。
      Gatsby.jsを使って作っています。
    </p>
  </Layout>
)
