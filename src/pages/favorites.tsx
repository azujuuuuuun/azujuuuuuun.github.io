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
      <li>グレイテスト・ショーマン</li>
      <li>最強のふたり</li>
      <li>世界から猫が消えたなら</li>
      <li>セッション</li>
    </ul>
    <h2>アニメ</h2>
    <ul>
      <li>風が強く吹いている</li>
      <li>四月は君の嘘</li>
      <li>SHIROBAKO</li>
    </ul>
    <h2>その他</h2>
    <ul>
      <li>Red Bull</li>
      <li>LAWSONのカフェオレグランデ</li>
    </ul>
  </Layout>
);
