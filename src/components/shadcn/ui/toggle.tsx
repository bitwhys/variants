'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as React from 'react'

import { cx, cva, type CvaVariantProps } from '@/lib/cva.ts'

const toggleVariants = cva({
  base: 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-muted outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  variants: {
    variant: {
      default: 'bg-transparent',
      outline:
        'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-9 px-3',
      sm: 'h-8 px-2',
      lg: 'h-10 px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    CvaVariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cx(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }