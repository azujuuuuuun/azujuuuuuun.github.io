import type { Feed } from "@/domain/blog/model";
import clsx from "clsx";
import dayjs from "dayjs";
import type React from "react";

interface BlogProps {
  className?: string;
  feed: Feed;
}

export const Blog: React.FC<BlogProps> = ({ className, feed }) => {
  return (
    <section className={clsx("block px-l py-xs", className)}>
      <h2 className="text-xl font-bold">Blog</h2>
      {feed.entry.length > 0 && (
        <>
          <ul className="mt-s">
            {feed.entry.map((e) => (
              <li key={e.id} className="flex leading-[1.6] mt-xs first:mt-0">
                <time dateTime={dayjs(e.published).format("YYYY-MM-DD")}>
                  {dayjs(e.published).format("YYYY/MM/DD")}
                </time>
                <a
                  className="ml-xs"
                  href={e.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
