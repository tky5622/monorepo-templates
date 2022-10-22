import { NFTStorage, File } from 'nft.storage'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

async function storeAsset() {
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
  const metadata = await client.store({
    name: 'ExampleNFT',
    description: 'My ExampleNFT is an awesome artwork!',
    image: new File(
      [await fs.promises.readFile('assets/MyExampleNFT.png')],
      'MyExampleNFT.png',
      { type: 'image/png' }
    ),
    reference: [],
  })
  console.log('Metadata stored on Filecoin and IPFS with URL:', metadata.url)
}

storeAsset()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
