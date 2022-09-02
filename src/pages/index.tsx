import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Feed } from "@/models/feed";
import { fetchFeed } from "@/api/fetch-feed";
import { HomeTemplate } from "@/templates/HomeTemplate";

interface HomePageProps {
  feed: Feed | null;
}

const HomePage: React.FC<HomePageProps> = ({ feed }) => {
  return (
    <>
      <Head>
        <title>azujuuuuuun.github.io</title>
      </Head>
      <HomeTemplate feed={feed} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const feed = await fetchFeed();
    return {
      props: { feed },
    };
  } catch {
    return {
      props: { feed: null },
    };
  }
};

export default HomePage;
