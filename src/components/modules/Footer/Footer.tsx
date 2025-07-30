import clsx from "clsx";
import dayjs from "dayjs";
import type React from "react";

interface FooterProps {
  className?: string;
  updateDate: string;
}

export const Footer: React.FC<FooterProps> = ({ className, updateDate }) => {
  return (
    <footer className={clsx("flex justify-between px-l py-xs", className)}>
      <small className="text-xs">©jun</small>
      <time
        className="text-xs"
        dateTime={dayjs(updateDate).format("YYYY-MM-DD")}
      >
        Update date: {dayjs(updateDate).format("YYYY/MM/DD")}
      </time>
    </footer>
  );
};
