import React from 'react';
import { withPrefix } from 'gatsby';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import locales from '../locales';

const AboutPage: React.VFC = () => (
  <Layout>
    <Head title="自己紹介 | azujuuuuuun.github.io" />
    <h1>{locales.selfIntroduction}</h1>
    <img src={withPrefix('/img/avatar.jpg')} alt={locales.avatar} />
    <ul>
      <li>userId: azujuuuuuun</li>
      <li>username: jun</li>
    </ul>
  </Layout>
);

export default AboutPage;
