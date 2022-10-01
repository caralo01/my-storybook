import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    type: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;
const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  text: "Hola mundo!",
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  text: "Hola mundo!",
  allCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: "Hola mundo!",
  type: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  text: "Hola mundo!",
  type: "tertiary",
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  text: "Hola mundo!",
  type: "tertiary",
  fontColor: "#5517ac",
};

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
  text: "Hola mundo!",
  type: "tertiary",
  fontColor: "#fff",
  backgroundColor: "#000",
};
