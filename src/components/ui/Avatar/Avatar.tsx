import type React from "react";

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
        className="w-[100px] h-[100px] rounded-full"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  );
};
