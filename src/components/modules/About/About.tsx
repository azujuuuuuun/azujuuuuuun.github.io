import { Avatar } from "@/components/ui/Avatar/Avatar";
import clsx from "clsx";
import type React from "react";

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={clsx("block px-l py-xs", className)}>
      <h2 className="text-xl font-bold">About</h2>
      <div className="flex items-center mt-s">
        <Avatar
          src="/img/avatar.jpg"
          alt="アバター"
          width={1048}
          height={1048}
        />
        <div className="flex flex-col ml-m">
          <span className="text-l font-bold">jun</span>
          <span className="mt-xs before:content-['@']">azujuuuuuun</span>
        </div>
      </div>
    </section>
  );
};
