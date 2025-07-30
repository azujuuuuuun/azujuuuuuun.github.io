import clsx from "clsx";
import type React from "react";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx("block px-l py-xs", className)}>
      <h1 className="text-xxl font-bold break-words">azujuuuuuun.github.io</h1>
    </header>
  );
};
