import React from 'react';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import Links from '../components/Links';

export default (): JSX.Element => (
  <Layout isHome>
    <Head title="azujuuuuuun.github.io" />
    <p>Hello, world!</p>
    <Links />
  </Layout>
);
