import { tv } from 'tailwind-variants'

const boxStyles = {
  base: [
    'h-[--control-size]',
    'px-[calc(var(--control-paddingInline)-1px)]',
    'py-[calc(var(--control-paddingBlock)-1px)]',
    'leading-[--control-lineHeight]',
  ],
  sizes: {
    // width: auto
    // height: 24px (sm) 32px (md) 36px (lg)
    xs: [
      '[--control-size:1.5rem]',
      '[--control-paddingInline:0.5rem]',
      '[--control-paddingBlock:0.125rem]',
      '[--control-lineHeight:1.25rem]',
      '[--control-gap:0.25rem]',
    ],
    sm: [
      '[--control-size:1.75rem]',
      '[--control-paddingInline:0.75rem]',
      '[--control-paddingBlock:0.25rem]',
      '[--control-lineHeight:1.25rem]',
      '[--control-gap:0.25rem]',
    ],
    md: [
      '[--control-size:2rem]',
      '[--control-paddingInline:0.75rem]',
      '[--control-paddingBlock:0.375rem]',
      '[--control-lineHeight:1.25rem]',
      '[--control-gap:0.5rem]',
    ],
    lg: [
      '[--control-size:2.5rem]',
      '[--control-paddingInline:0.75rem]',
      '[--control-paddingBlock:0.625rem]',
      '[--control-lineHeight:1.25rem]',
      '[--control-gap:0.5rem]',
    ],
    xl: [
      '[--control-size:3rem]',
      '[--control-paddingInline:0.75rem]',
      '[--control-paddingBlock:0.875rem]',
      '[--control-lineHeight:1.25rem]',
      '[--control-gap:0.5rem]',
    ],
  },
}
export const control = tv({
  base: boxStyles.base,
  variants: {
    size: {
      xs: boxStyles.sizes.xs,
      sm: boxStyles.sizes.sm,
      md: boxStyles.sizes.md,
      lg: boxStyles.sizes.lg,
      xl: boxStyles.sizes.xl,
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
