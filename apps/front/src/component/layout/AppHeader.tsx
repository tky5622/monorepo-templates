import { Header } from '@mantine/core'
import React from 'react'
import WalletConnectContainer from '../walletConnect/WalletConnectContainer'

type AppHeaderProps = {
  // children: React.ReactNode
}

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <Header height={60} p="xs">
      <WalletConnectContainer />
    </Header>
  )
}

export default AppHeader
