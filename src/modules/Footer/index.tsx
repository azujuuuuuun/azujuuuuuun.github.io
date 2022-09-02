import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.Footer, className)}>
      <small className={styles.Footer__copyright}>©jun</small>
    </footer>
  );
};
