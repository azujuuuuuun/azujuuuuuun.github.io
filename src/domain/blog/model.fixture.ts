import type { Entry, Feed } from "./model";

export const getEntryFixture = (entry?: Partial<Entry>): Entry => {
  return {
    title: "Entry title",
    link: {
      href: "https://example.com/",
    },
    id: "Entry id",
    published: "2022-09-10T00:00:00+09:00",
    ...entry,
  };
};

export const getFeedFixture = (feed?: Partial<Feed>): Feed => {
  return {
    title: "Blog name",
    subTitle: "Blog description",
    link: {
      href: "https://example.com/",
    },
    updated: "2022-09-10T00:00:0+09:00",
    entry: [getEntryFixture()],
    ...feed,
  };
};
