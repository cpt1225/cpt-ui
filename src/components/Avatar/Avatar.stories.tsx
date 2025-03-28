import { Avatar } from "./Avatar"
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "通用/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes:{
    color: { control: "color" }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    shape: 'circle',
    color: 'green',
    src: 'https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg',
    alt: 'avatar'
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    color: 'blue',
    src: 'https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg',
    alt: 'avatar'
  },
};
