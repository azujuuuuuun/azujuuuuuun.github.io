import React from 'react';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import Links from '../components/Links';
import locales from '../locales';

const HomePage: React.FC = () => (
  <Layout isHome>
    <Head title={locales.siteName} />
    <p>Hello, world!</p>
    <Links />
  </Layout>
);

export default HomePage;
