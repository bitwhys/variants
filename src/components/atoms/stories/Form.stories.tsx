import type { Meta } from '@storybook/react'
import React from 'react'
import { Button } from '@/components/atoms/Button.tsx'
import { DateField } from '@/components/atoms/DateField.tsx'
import { Form } from '@/components/atoms/Form.tsx'
import { TextField } from '@/components/atoms/TextField.tsx'

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>
)
