import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>azujuuuuuun.github.io</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
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
          <section>
            <h2>About</h2>
            <Avatar
              src="/img/avatar.jpg"
              alt="アバター"
              width={1048}
              height={1048}
            />
            <dl>
              <dt>userId</dt>
              <dd>azujuuuuuun</dd>
              <dt>username</dt>
              <dd>jun</dd>
            </dl>
          </section>
          <section>
            <h2>Favorite</h2>
            <ul>
              <li>Manga</li>
              <li>Anime</li>
              <li>Programming</li>
            </ul>
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
              <li>
                <a
                  href="https://azujuuuuuun.hatenablog.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Blog
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
