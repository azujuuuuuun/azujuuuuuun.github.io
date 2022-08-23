import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>azujuuuuuun.github.io</title>
        <meta charSet="utf-8" />
      </Head>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 650,
          padding: `0 1rem`,
        }}
      >
        <Header />
        <main>
          <p>Hello, world!</p>
          <section>
            <h2>About</h2>
            <picture>
              <img
                src="/img/avatar.jpg"
                alt="アバター"
                width={300}
                height={300}
              />
            </picture>
            <dl>
              <dt>userId</dt>
              <dd>azujuuuuuun</dd>
              <dt>username</dt>
              <dd>jun</dd>
            </dl>
          </section>
          <section>
            <h2>Favorite</h2>
            <p>漫画と映画とアニメとプログラミングが好きです。</p>
            <section>
              <h3>漫画</h3>
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
            </section>
            <section>
              <h3>映画</h3>
              <ul>
                <li>イエスマン “YES”は人生のパスワード</li>
                <li>きっと、うまくいく</li>
                <li>
                  <a
                    href="http://www.foxmovies-jp.com/greatest-showman/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    グレイテスト・ショーマン
                  </a>
                </li>
                <li>最強のふたり</li>
                <li>世界から猫が消えたなら</li>
                <li>
                  <a
                    href="http://session.gaga.ne.jp/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    セッション
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>アニメ</h3>
              <ul>
                <li>
                  <a
                    href="http://kazetsuyo-anime.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    風が強く吹いている
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kimiuso.jp/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    四月は君の嘘
                  </a>
                </li>
                <li>
                  <a
                    href="http://shirobako-anime.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    SHIROBAKO
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>その他</h3>
              <ul>
                <li>
                  <a
                    href="https://energydrink-jp.redbull.com/red-bull-energy-drink"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Red Bull
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lawson.co.jp/recommend/original/detail/1303294_1996.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LAWSONのカフェオレグランデ
                  </a>
                </li>
              </ul>
            </section>
          </section>
          <section>
            <h2>Link</h2>
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
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
