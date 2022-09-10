import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from ".";

export default {
  title: "Modules/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
