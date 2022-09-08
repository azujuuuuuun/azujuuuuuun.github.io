import React from "react";
import { Feed } from "@/models/feed";
import { Header } from "@/modules/Header";
import { About } from "@/modules/About";
import { Favorite } from "@/modules/Favorite";
import { Link } from "@/modules/Link";
import { Blog } from "@/modules/Blog";
import { Footer } from "@/modules/Footer";
import styles from "./index.module.scss";

interface HomeTemplateProps {
  feed: Feed | null;
  updateDate: string;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  feed,
  updateDate,
}) => {
  return (
    <div className={styles.HomeTemplate}>
      <Header className={styles.HomeTemplate__header} />
      <main className={styles.HomeTemplate__main}>
        <About className={styles.HomeTemplate__module} />
        <Favorite className={styles.HomeTemplate__module} />
        <Link className={styles.HomeTemplate__module} />
        {feed && <Blog className={styles.HomeTemplate__module} feed={feed} />}
      </main>
      <Footer className={styles.HomeTemplate__footer} updateDate={updateDate} />
    </div>
  );
};
