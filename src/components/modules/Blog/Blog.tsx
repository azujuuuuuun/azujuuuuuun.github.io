import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import { Feed } from "@/domain/blog/model";
import styles from "./Blog.module.scss";

interface BlogProps {
  className?: string;
  feed: Feed;
}

export const Blog: React.FC<BlogProps> = ({ className, feed }) => {
  return (
    <section className={clsx(styles.Blog, className)}>
      <h2 className={styles.Blog__heading}>Blog</h2>
      {feed.entry.length > 0 && (
        <>
          <ul className={styles.Blog__list}>
            {feed.entry.map((e) => (
              <li key={e.id} className={styles.Blog__item}>
                <time
                  className={styles.Blog__date}
                  dateTime={dayjs(e.published).format("YYYY-MM-DD")}
                >
                  {dayjs(e.published).format("YYYY/MM/DD")}
                </time>
                <a
                  className={styles.Blog__title}
                  href={e.link[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
