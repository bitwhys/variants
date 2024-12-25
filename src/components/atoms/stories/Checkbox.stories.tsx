import { Checkbox } from '@/components/atoms/Checkbox.tsx'

export default {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isDisabled: false,
    children: 'Checkbox',
  },
}

export const Default = {
  args: {},
}
