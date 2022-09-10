import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getFeedFixture, getEntryFixture } from "@/models/feed.fixture";
import { Blog } from ".";

export default {
  title: "Modules/Blog",
  component: Blog,
  args: {
    updateDate: new Date("2022-09-10").toJSON(),
  },
} as ComponentMeta<typeof Blog>;

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const Entries = Template.bind({});
Entries.args = {
  feed: getFeedFixture({
    entry: [
      getEntryFixture(),
      getEntryFixture({
        id: "Long title entry id",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }),
    ],
  }),
};

export const NoEntry = Template.bind({});
NoEntry.args = {
  feed: getFeedFixture({ entry: [] }),
};
