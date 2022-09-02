import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.Header, className)}>
      <h1 className={styles.Header__title}>azujuuuuuun.github.io</h1>
    </header>
  );
};
