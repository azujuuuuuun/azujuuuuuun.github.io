import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Feed } from "@/models/feed";
import { fetchFeed } from "@/api/fetch-feed";
import { HomeTemplate } from "@/templates/HomeTemplate";

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
    const bucketName = process.env.GCS_BUCKET_NAME;
    if (!bucketName) {
      throw new Error("GCS_BUCKET_NAME is not set.");
    }
    const fileName = process.env.GCS_FILE_NAME;
    if (!fileName) {
      throw new Error("GCS_FILE_NAME is not set.");
    }
    const feed = await fetchFeed(bucketName, fileName);
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
