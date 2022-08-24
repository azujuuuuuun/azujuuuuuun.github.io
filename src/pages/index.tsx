import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";
import styles from "@/styles/index.module.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>azujuuuuuun.github.io</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main>
          <section className={styles.About}>
            <h2 className={styles.About__heading}>About</h2>
            <div className={styles.About__profile}>
              <Avatar
                src="/img/avatar.jpg"
                alt="アバター"
                width={1048}
                height={1048}
              />
              <div className={styles.About__userInfo}>
                <span className={styles.About__username}>jun</span>
                <span className={styles.About__userId}>azujuuuuuun</span>
              </div>
            </div>
          </section>
          <section className={styles.Favorite}>
            <h2 className={styles.Favorite__heading}>Favorite</h2>
            <ul className={styles.Favorite__list}>
              <li className={styles.Favorite__item}>Manga</li>
              <li className={styles.Favorite__item}>Anime</li>
              <li className={styles.Favorite__item}>Programming</li>
            </ul>
          </section>
          <section className={styles.Link}>
            <h2 className={styles.Link__heading}>Link</h2>
            <ul className={styles.Link__list}>
              <li className={styles.Link__item}>
                <a
                  href="https://github.com/azujuuuuuun"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </li>
              <li className={styles.Link__item}>
                <a
                  href="https://twitter.com/azujuuuuuun"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li className={styles.Link__item}>
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
