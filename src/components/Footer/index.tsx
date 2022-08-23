import React from "react";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <small className={styles.Footer__copyright}>
        ©Copyright jun. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
