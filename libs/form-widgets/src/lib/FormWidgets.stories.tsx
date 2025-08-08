import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within, fn } from "storybook/test";

import { TextInput } from "./form-widgets";

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Name",
    onChange: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Gova");

    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: {
    label: "Last Name",
    onChange: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Gova");

    await expect(args.onChange).toHaveBeenCalled();
  },
};
