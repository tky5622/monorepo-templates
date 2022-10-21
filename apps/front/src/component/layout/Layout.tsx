import { AppShell } from '@mantine/core';
import React from 'react';
import AppHeader from './AppHeader';
import AppNavBar from './NavBar';

type LayoutProps = {
  children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <AppShell
      padding="md"
      navbar={<AppNavBar/>}
      header={<AppHeader/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}

export default Layout