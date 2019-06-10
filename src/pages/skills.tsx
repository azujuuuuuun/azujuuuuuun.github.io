import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import locales from '../locales';

export default (): JSX.Element => (
  <Layout>
    <Head title="スキル | azujuuuuuun.github.io" />
    <h1>{locales.skill}</h1>
    <h2>{locales.works}</h2>
    <h3>
      <a href="http://wkd.main.jp" target="_blank">
        {locales.work1Name}
      </a>
    </h3>
    <img
      src={withPrefix('/img/work1.png')}
      alt={locales.work1Name}
    />
    <p>{locales.work1Description}</p>
    <h3>
      <a href="https://azujuuuuuun.github.io">{locales.work2Name}</a>
    </h3>
    <img src={withPrefix('/img/work2.png')} alt={locales.work2Name} />
    <p>{locales.work2Description}</p>
  </Layout>
);
