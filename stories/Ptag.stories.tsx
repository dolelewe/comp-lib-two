import type {Meta, StoryObj} from "@storybook/react";
import {Ptag} from "./Ptag";

const meta = {
    title: "custom/Ptag",
    component: Ptag,
    parameters: {
        layout: 'center'
    },
    tags: ['autodocs'],
    argTypes: {
       info: {}
    },
} satisfies Meta<typeof Ptag>
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      info: 'P Button',
    },
  };