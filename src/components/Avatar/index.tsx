import React from "react";

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
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default Avatar;
