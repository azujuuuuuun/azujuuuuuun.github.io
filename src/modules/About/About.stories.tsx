import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { About } from "./About";

export default {
  title: "Modules/About",
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Default = Template.bind({});
