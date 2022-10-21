import { ConnectButton, useAccount } from '@web3modal/react'


export default function HomePage() {
  const { address, connector, isConnected } = useAccount()

  return isConnected ? (
    <>
    {address}{connector?.name}{connector?.id}
    </>
  ) : (
    <ConnectButton />
  )
}