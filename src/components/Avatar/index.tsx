import React from "react";
import styles from "./index.module.scss";

interface AvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
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

export default Avatar;
