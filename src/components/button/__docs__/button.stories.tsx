import type { Meta, StoryObj } from "@storybook/react";
import ButtonContainer from "./buttonContainer";

const meta: Meta<typeof ButtonContainer> = {
  title: "Button",
  component: ButtonContainer,
};

export default meta;
type Story = StoryObj<typeof ButtonContainer>;

export const Primary: Story = {
  args: {
    text: "Button Primary",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button Secondary",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
