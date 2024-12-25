import { ActionPanel } from '@/components/action-panel.tsx'
import { button } from '@/components/shadcn/button.tsx'

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-grey-2">
      <ActionPanel className="min-w-80">
        <button className={button({ size: 'sm', color: 'secondary' })}>Click me</button>
      </ActionPanel>
    </div>
  )
}

export default App
