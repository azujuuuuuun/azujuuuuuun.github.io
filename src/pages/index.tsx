import { HomeTemplate } from "@/components/templates/HomeTemplate/HomeTemplate";
import { env } from "@/config/env";
import type { Feed } from "@/domain/blog/model";
import { fetchFeed } from "@/domain/blog/repository";
import type { GetStaticProps } from "next";
import Head from "next/head";
import type React from "react";

interface HomePageProps {
  feed: Feed | null;
  updateDate: string;
}

const HomePage: React.FC<HomePageProps> = ({ feed, updateDate }) => {
  return (
    <>
      <Head>
        <title>azujuuuuuun.github.io</title>
      </Head>
      <HomeTemplate feed={feed} updateDate={updateDate} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const jsonDate = new Date().toJSON();
  try {
    const feed = await fetchFeed(env.bucketName, env.fileName);
    return {
      props: { feed, updateDate: jsonDate },
    };
  } catch {
    return {
      props: { feed: null, updateDate: jsonDate },
    };
  }
};

export default HomePage;
