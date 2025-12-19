import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ThemeProvider } from './theme-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </ThemeProvider>
    </>
  )
}

export default Providers
