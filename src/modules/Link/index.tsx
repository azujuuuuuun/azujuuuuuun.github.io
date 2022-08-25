import React from "react";
import styles from "./index.module.scss";

interface LinkProps {
  className?: string;
}

const Link: React.FC<LinkProps> = ({ className }) => {
  return (
    <section
      className={className ? `${styles.Link} ${className}` : styles.Link}
    >
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
  );
};

export default Link;
