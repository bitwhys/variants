import type { Meta } from '@storybook/react'
import React from 'react'
import { Meter } from '@/components/atoms/Meter.tsx'

const meta: Meta<typeof Meter> = {
  component: Meter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args: any) => <Meter {...args} />

Example.args = {
  label: 'Storage space',
  value: 80,
}
