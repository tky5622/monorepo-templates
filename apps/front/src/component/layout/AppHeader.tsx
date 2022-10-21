import { Header } from '@mantine/core';
import React from 'react';

type AppHeaderProps = {
  // children: React.ReactNode
}


const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <Header height={60} p="xs">{/* Header content */}</Header>
  );
}

export default AppHeader