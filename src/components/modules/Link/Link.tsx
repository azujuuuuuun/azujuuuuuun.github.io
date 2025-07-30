import clsx from "clsx";
import type React from "react";

interface LinkProps {
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ className }) => {
  return (
    <section className={clsx("block px-l py-xs", className)}>
      <h2 className="text-xl font-bold">Link</h2>
      <ul className="flex mt-s">
        <li>
          <a
            href="https://github.com/azujuuuuuun"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>
        <li className="before:content-['/'] before:mx-xs">
          <a
            href="https://twitter.com/azujuuuuuun"
            target="_blank"
            rel="noreferrer noopener"
          >
            X
          </a>
        </li>
        <li className="before:content-['/'] before:mx-xs">
          <a
            href="https://azujuuuuuun.hatenablog.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blog
          </a>
        </li>
      </ul>
    </section>
  );
};
