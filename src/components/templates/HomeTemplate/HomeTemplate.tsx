import { About } from "@/components/modules/About/About";
import { Blog } from "@/components/modules/Blog/Blog";
import { Favorite } from "@/components/modules/Favorite/Favorite";
import { Footer } from "@/components/modules/Footer/Footer";
import { Header } from "@/components/modules/Header/Header";
import { Link } from "@/components/modules/Link/Link";
import type { Feed } from "@/domain/blog/model";
import type React from "react";

interface HomeTemplateProps {
  feed: Feed | null;
  updateDate: string;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  feed,
  updateDate,
}) => {
  return (
    <div className="my-xxl mx-auto max-w-[650px]">
      <Header />
      <main className="mt-xxl">
        <About className="mt-xl first:mt-0" />
        <Favorite className="mt-xl first:mt-0" />
        <Link className="mt-xl first:mt-0" />
        {feed && <Blog className="mt-xl first:mt-0" feed={feed} />}
      </main>
      <Footer className="mt-xxl" updateDate={updateDate} />
    </div>
  );
};
