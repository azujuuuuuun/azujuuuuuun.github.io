import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Favorite } from ".";

export default {
  title: "Modules/Favorite",
  component: Favorite,
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (args) => (
  <Favorite {...args} />
);

export const Default = Template.bind({});
