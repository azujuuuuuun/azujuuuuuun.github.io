import React from 'react';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import locales from '../locales';

const LinksPage: React.FC = () => (
  <Layout>
    <Head title="リンク | azujuuuuuun.github.io" />
    <h1>{locales.link}</h1>
    <ul>
      <li>
        <a
          href="https://github.com/azujuuuuuun"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/azujuuuuuun"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>
      </li>
    </ul>
  </Layout>
);

export default LinksPage;
