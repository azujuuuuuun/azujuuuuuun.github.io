import clsx from "clsx";
import type React from "react";

interface FavoriteProps {
  className?: string;
}

export const Favorite: React.FC<FavoriteProps> = ({ className }) => {
  return (
    <section className={clsx("block px-l py-xs", className)}>
      <h2 className="text-xl font-bold">Favorite</h2>
      <ul className="flex mt-s">
        <li>Manga</li>
        <li className="before:content-['/'] before:mx-xs">Anime</li>
        <li className="before:content-['/'] before:mx-xs">Programming</li>
      </ul>
    </section>
  );
};
