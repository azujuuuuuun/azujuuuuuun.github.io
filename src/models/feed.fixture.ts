import { Entry, Feed } from "./feed";

export const getEntryFixture = (entry?: Partial<Entry>): Entry => {
  return {
    title: "Entry title",
    link: [
      {
        href: "https://example.com/",
      },
    ],
    id: "Entry id",
    published: "2022-09-10T00:00:00+09:00",
    updated: "2022-09-10T00:00:00+09:00",
    summary: "Entry summary",
    content: "Entry content",
    category: {
      term: "Category term",
      label: "Category label",
    },
    author: {
      name: "Author name",
    },
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
    author: {
      name: "Author name",
    },
    id: "Blog id",
    entry: [getEntryFixture()],
    ...feed,
  };
};
