import React from "react";
import styles from "./index.module.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={className ? `${styles.Header} ${className}` : styles.Header}
    >
      <h1 className={styles.Header__title}>azujuuuuuun.github.io</h1>
    </header>
  );
};

export default Header;
