import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '@/components/shadcn/ui/button'
import { Sparkles } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'ghost', 'outline', 'link', 'destructive'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

export const WithLeadingIcon: Story = {
  render: args => {
    return (
      <Button className="group" {...args}>
        <ArrowLeft
          className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Button
      </Button>
    )
  },
  args: {
    variant: 'ghost',
  },
}

export const WithTrailingIcon: Story = {
  render: args => {
    return (
      <Button {...args}>
        Button
        <Sparkles className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    )
  },
  args: {
    variant: 'outline',
  },
}
