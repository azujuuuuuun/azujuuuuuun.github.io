import React from "react";
import Header from "@/modules/Header";
import About from "@/modules/About";
import Favorite from "@/modules/Favorite";
import Link from "@/modules/Link";
import Footer from "@/modules/Footer";
import styles from "./index.module.scss";

const HomeTemplate: React.FC = () => {
  return (
    <div className={styles.HomeTemplate}>
      <Header className={styles.HomeTemplate__header} />
      <main className={styles.HomeTemplate__main}>
        <About className={styles.HomeTemplate__module} />
        <Favorite className={styles.HomeTemplate__module} />
        <Link className={styles.HomeTemplate__module} />
      </main>
      <Footer className={styles.HomeTemplate__footer} />
    </div>
  );
};

export default HomeTemplate;
