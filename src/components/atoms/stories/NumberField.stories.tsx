import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/atoms/Button.tsx'
import { NumberField } from '@/components/atoms/NumberField.tsx'

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Cookies',
  },
}

export default meta

export const Example = (args: any) => <NumberField {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <NumberField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}