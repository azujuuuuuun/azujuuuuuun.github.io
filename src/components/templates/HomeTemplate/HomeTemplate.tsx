import React from "react";
import { Feed } from "@/domain/blog/model";
import { Header } from "@/components/modules/Header/Header";
import { About } from "@/components/modules/About/About";
import { Favorite } from "@/components/modules/Favorite/Favorite";
import { Link } from "@/components/modules/Link/Link";
import { Blog } from "@/components/modules/Blog/Blog";
import { Footer } from "@/components/modules/Footer/Footer";
import styles from "./HomeTemplate.module.scss";

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
