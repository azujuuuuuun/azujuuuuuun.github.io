import React from 'react';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import locales from '../locales';

const LinksPage: React.VFC = () => (
  <Layout>
    <Head title="リンク | azujuuuuuun.github.io" />
    <h1>{locales.link}</h1>
    <ul>
      <li>
        <a href="https://github.com/azujuuuuuun" target="_blank">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://twitter.com/azujuuuuuun" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://qiita.com/azujuuuuuun" target="_blank">
          Qiita
        </a>
      </li>
      <li>
        <a href="https://booklog.jp/users/azujuuuuuun" target="_blank">
          ブクログ
        </a>
      </li>
      <li>
        <a href="https://eiga.com/mypage/753513/" target="_blank">
          映画.com
        </a>
      </li>
      <li>
        <a href="http://animetick.net/users/azujuuuuuun" target="_blank">
          Animetick
        </a>
      </li>
    </ul>
  </Layout>
);

export default LinksPage;
