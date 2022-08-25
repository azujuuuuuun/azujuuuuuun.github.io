import React from "react";
import clsx from "clsx";
import Avatar from "@/components/Avatar";
import styles from "./index.module.scss";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={clsx(styles.About, className)}>
      <h2 className={styles.About__heading}>About</h2>
      <div className={styles.About__profile}>
        <Avatar
          src="/img/avatar.jpg"
          alt="アバター"
          width={1048}
          height={1048}
        />
        <div className={styles.About__userInfo}>
          <span className={styles.About__username}>jun</span>
          <span className={styles.About__userId}>azujuuuuuun</span>
        </div>
      </div>
    </section>
  );
};

export default About;
