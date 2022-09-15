import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Feed } from "@/models/feed";
import { env } from "@/config/env";
import { fetchFeed } from "@/api/fetch-feed";
import { HomeTemplate } from "@/templates/HomeTemplate/HomeTemplate";

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
