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
          padding: `0 24px`,
        }}
      >
        <Header />
        <main>
          <section style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "bold" }}>About</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Avatar
                src="/img/avatar.jpg"
                alt="アバター"
                width={1048}
                height={1048}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "16px",
                }}
              >
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  jun
                </span>
                <span>azujuuuuuun</span>
              </div>
            </div>
          </section>
          <section style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "bold" }}>Favorite</h2>
            <ul
              style={{ listStyle: "none", display: "flex", marginTop: "12px" }}
            >
              <li>Manga</li>
              <li style={{ marginLeft: "8px" }}>Anime</li>
              <li style={{ marginLeft: "8px" }}>Programming</li>
            </ul>
          </section>
          <section style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "bold" }}>Link</h2>
            <ul style={{ marginTop: "12px" }}>
              <li>
                <a
                  href="https://github.com/azujuuuuuun"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </li>
              <li style={{ marginTop: "8px" }}>
                <a
                  href="https://twitter.com/azujuuuuuun"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li style={{ marginTop: "8px" }}>
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
