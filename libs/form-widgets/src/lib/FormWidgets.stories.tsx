import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextInput } from "./form-widgets";
import { fn } from "storybook/test";

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
};
