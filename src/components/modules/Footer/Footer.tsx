import clsx from "clsx";
import dayjs from "dayjs";
import type React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  className?: string;
  updateDate: string;
}

export const Footer: React.FC<FooterProps> = ({ className, updateDate }) => {
  return (
    <footer className={clsx(styles.Footer, className)}>
      <small className={styles.Footer__copyright}>©jun</small>
      <time
        className={styles.Footer__updateDate}
        dateTime={dayjs(updateDate).format("YYYY-MM-DD")}
      >
        Update date: {dayjs(updateDate).format("YYYY/MM/DD")}
      </time>
    </footer>
  );
};
