import type { Meta } from '@storybook/react'
import React from 'react'
import { ColorArea } from '@/components/atoms/ColorArea.tsx'

const meta: Meta<typeof ColorArea> = {
  component: ColorArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args: any) => <ColorArea {...args} />
