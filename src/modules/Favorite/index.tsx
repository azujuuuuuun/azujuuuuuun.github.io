import React from "react";
import styles from "./index.module.scss";

interface FavoriteProps {
  className?: string;
}

const Favorite: React.FC<FavoriteProps> = ({ className }) => {
  return (
    <section
      className={
        className ? `${styles.Favorite} ${className}` : styles.Favorite
      }
    >
      <h2 className={styles.Favorite__heading}>Favorite</h2>
      <ul className={styles.Favorite__list}>
        <li className={styles.Favorite__item}>Manga</li>
        <li className={styles.Favorite__item}>Anime</li>
        <li className={styles.Favorite__item}>Programming</li>
      </ul>
    </section>
  );
};

export default Favorite;
