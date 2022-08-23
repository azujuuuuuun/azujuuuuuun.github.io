import React from 'react';

import Layout from '../layouts/DefaultLayout';
import Head from '../components/Head';
import locales from '../locales';

const FavoritesPage: React.VFC = () => (
  <Layout>
    <Head title="好きなもの | azujuuuuuun.github.io" />
    <h1>{locales.favorite}</h1>
    <p>漫画と映画とアニメとプログラミングが好きです。</p>
    <h2>{locales.manga}</h2>
    <ul>
      <li>{locales.manga1}</li>
      <li>{locales.manga2}</li>
      <li>{locales.manga3}</li>
      <li>{locales.manga4}</li>
      <li>{locales.manga5}</li>
      <li>{locales.manga6}</li>
      <li>{locales.manga7}</li>
      <li>{locales.manga8}</li>
      <li>{locales.manga9}</li>
      <li>{locales.manga10}</li>
      <li>{locales.manga11}</li>
    </ul>
    <h2>{locales.movie}</h2>
    <ul>
      <li>{locales.movie1}</li>
      <li>{locales.movie2}</li>
      <li>
        <a
          href="http://www.foxmovies-jp.com/greatest-showman/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.movie3}
        </a>
      </li>
      <li>{locales.movie4}</li>
      <li>{locales.movie5}</li>
      <li>
        <a
          href="http://session.gaga.ne.jp/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.movie6}
        </a>
      </li>
    </ul>
    <h2>{locales.anime}</h2>
    <ul>
      <li>
        <a
          href="http://kazetsuyo-anime.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.anime1}
        </a>
      </li>
      <li>
        <a
          href="https://www.kimiuso.jp/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.anime2}
        </a>
      </li>
      <li>
        <a
          href="http://shirobako-anime.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.anime3}
        </a>
      </li>
    </ul>
    <h2>{locales.other}</h2>
    <ul>
      <li>
        <a
          href="https://energydrink-jp.redbull.com/red-bull-energy-drink"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.other1}
        </a>
      </li>
      <li>
        <a
          // eslint-disable-next-line max-len
          href="https://www.lawson.co.jp/recommend/original/detail/1303294_1996.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          {locales.other2}
        </a>
      </li>
    </ul>
  </Layout>
);

export default FavoritesPage;
