import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
  return (
    <picture>
      <img
        className={styles.Avatar__img}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  );
};
