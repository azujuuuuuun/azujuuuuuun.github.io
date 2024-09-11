import { HomeTemplate } from "@/components/templates/HomeTemplate/HomeTemplate";
import { env } from "@/config/env";
import { fetchFeed } from "@/domain/blog/repository";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "azujuuuuuun.github.io",
};

export default async function HomePage() {
  const updateDate = new Date().toJSON();
  const feed = await fetchFeed(env.bucketName, env.fileName).catch(() => null);
  return (
    <>
      <HomeTemplate feed={feed} updateDate={updateDate} />
    </>
  );
}
