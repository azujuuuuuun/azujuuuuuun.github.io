import clsx from "clsx";
import type React from "react";
import styles from "./Favorite.module.scss";

interface FavoriteProps {
  className?: string;
}

export const Favorite: React.FC<FavoriteProps> = ({ className }) => {
  return (
    <section className={clsx(styles.Favorite, className)}>
      <h2 className={styles.Favorite__heading}>Favorite</h2>
      <ul className={styles.Favorite__list}>
        <li className={styles.Favorite__item}>Manga</li>
        <li className={styles.Favorite__item}>Anime</li>
        <li className={styles.Favorite__item}>Programming</li>
      </ul>
    </section>
  );
};
