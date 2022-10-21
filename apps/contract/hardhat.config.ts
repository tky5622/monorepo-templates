import '@nomicfoundation/hardhat-toolbox'
import { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    //  mumbai: {
    //    url: "https://rpc-mumbai.maticvigil.com",
    //    accounts: [process.env.privateKey]
    //  }
  },
  solidity: '0.8.17',
}

export default config
