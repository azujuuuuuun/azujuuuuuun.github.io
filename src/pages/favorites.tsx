import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';

export default (): JSX.Element => (
  <Layout>
    <Head title="好きなもの | azujuuuuuun.github.io" />
    <h1>好きなもの</h1>
    <p>漫画と映画とアニメとプログラミングが好きです。</p>
    <h2>漫画</h2>
    <ul>
      <li>違国日記</li>
      <li>Artiste</li>
      <li>彼方のアストラ</li>
      <li>金色のガッシュベル</li>
      <li>ちはやふる</li>
      <li>ハイキュー!!</li>
      <li>バクマン。</li>
      <li>ヒナまつり</li>
      <li>BLUE GIANT</li>
      <li>僕のヒーローアカデミア</li>
      <li>ランウェイで笑って</li>
    </ul>
    <h2>映画</h2>
    <ul>
      <li>イエスマン “YES”は人生のパスワード</li>
      <li>きっと、うまくいく</li>
      <li>
        <a href="http://www.foxmovies-jp.com/greatest-showman/" target="_blank">
          グレイテスト・ショーマン
        </a>
      </li>
      <li>最強のふたり</li>
      <li>世界から猫が消えたなら</li>
      <li>
        <a href="http://session.gaga.ne.jp/" target="_blank">セッション</a>
      </li>
    </ul>
    <h2>アニメ</h2>
    <ul>
      <li>
        <a href="http://kazetsuyo-anime.com/" target="_blank">風が強く吹いている</a>
      </li>
      <li>
        <a href="https://www.kimiuso.jp/" target="_blank">四月は君の嘘</a>
      </li>
      <li>
        <a href="http://shirobako-anime.com/" target="_blank">SHIROBAKO</a>
      </li>
    </ul>
    <h2>その他</h2>
    <ul>
      <li>Red Bull</li>
      <li>
        <a
          // eslint-disable-next-line max-len
          href="https://www.lawson.co.jp/recommend/original/detail/1303294_1996.html"
          target="_blank"
        >
          LAWSONのカフェオレグランデ
        </a>
      </li>
    </ul>
  </Layout>
);
