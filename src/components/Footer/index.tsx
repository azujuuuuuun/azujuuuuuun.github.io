import React from "react";
import styles from "./index.module.scss";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={className ? `${styles.Footer} ${className}` : styles.Footer}
    >
      <small className={styles.Footer__copyright}>©jun</small>
    </footer>
  );
};

export default Footer;
