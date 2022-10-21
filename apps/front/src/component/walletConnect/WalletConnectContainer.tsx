import { ConnectButton, useAccount } from '@web3modal/react'

export default function WalletConnectContainer() {
  const { address, connector, isConnected } = useAccount()

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
        <ConnectButton />
      )}
    </div>
  )
}
