import { AppShell } from '@mantine/core'
import React from 'react'
import WalletConnectModal from '../walletConnect/WalletConnectModal'
import AppHeader from './AppHeader'
import { FooterLinks } from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      // navbar={<AppNavBar />}
      header={<AppHeader />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <WalletConnectModal />
      {children}
      <FooterLinks/>
    </AppShell>
  )
}

export default Layout
