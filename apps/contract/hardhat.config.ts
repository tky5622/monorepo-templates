/* eslint-disable @typescript-eslint/no-var-requires */
import '@nomicfoundation/hardhat-toolbox'
import { HardhatUserConfig } from 'hardhat/config'
require('dotenv').config();
const { REACT_APP_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
     mumbai: {
       url: "https://rpc-mumbai.maticvigil.com",
       accounts: [REACT_APP_PRIVATE_KEY || '']
     }
  },
  solidity: '0.8.17',
}

export default config
