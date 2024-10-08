import clsx from "clsx";
import type React from "react";
import styles from "./Link.module.scss";

interface LinkProps {
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ className }) => {
  return (
    <section className={clsx(styles.Link, className)}>
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
            X
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
  );
};
