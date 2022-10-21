import { Button } from '@mantine/core';
import { useAccount, useConnectModal } from '@web3modal/react';

export default function WalletConnectContainer() {
  const { address, connector, isConnected } = useAccount()
  const { open} = useConnectModal()

  return (
    <div>
      <p>testestestststtest</p>
      {isConnected ? (
        <>
          {address}
          {connector?.name}
          {connector?.id}
        </>
      ) : (
       <Button onClick={open}variant="gradient" gradient={{ from: 'orange', to: 'red' }}> Connect </Button >
      )}
    </div>
  )
}
