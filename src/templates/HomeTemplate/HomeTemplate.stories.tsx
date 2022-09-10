import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getFeedFixture } from "@/models/feed.fixture";
import { HomeTemplate } from "./HomeTemplate";

export default {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  args: {
    updateDate: new Date("2022-09-10").toJSON(),
  },
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const Blog = Template.bind({});
Blog.args = {
  feed: getFeedFixture(),
};

export const NoBlog = Template.bind({});
NoBlog.args = {
  feed: null,
};
