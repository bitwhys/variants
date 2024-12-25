import type { ReactNode } from 'react'
import { cx } from '@/lib/cva.ts'

type ActionPanelProps = {
  children: ReactNode
  title?: string
  className?: string
}
export const ActionPanel = ({ children, className }: ActionPanelProps) => (
  <div className={cx('bg-grey-3  sm:rounded-lg', className)}>
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </div>
)
