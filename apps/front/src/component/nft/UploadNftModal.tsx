import { Group, LoadingOverlay, Modal } from '@mantine/core'

// import { useAddress, useNFTCollection } from '@thirdweb-dev/react'
import { useState } from 'react'

import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
// import { NFTMetadataOwner } from '@thirdweb-dev/sdk'
// import { AppContext } from '../App'
// import { NFT_COLLECTION_MUMBAI_CONTRACT } from '../config/contracts'
import { ethers } from 'ethers'
// import ShareModal from 'lit-share-modal-v3'
import { address } from '../../abi/contractAddress'
import ABI from '../../abi/nft.json'
import RoundButton from '../shared/RoundButton'
import NftDropZone from './NftDropZone'

const mintNftHandler = async (values, setLoading, setIsOpen) => {
  console.log(values, 'mintNftHandler')
  try {
    const { ethereum } = window
    console.log(ethereum)

    if (ethereum) {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      console.log(ABI, 'abi')
      const nftContract = new ethers.Contract(address, ABI, signer)
      console.log(nftContract, nftContract.mintNFT)
      const nftTxn = await nftContract.mintNFT(
        '0xE3EE8A5d4f74F7743BD9618b4848Ab94b771483e',
        'test'
      )
      console.log(nftTxn, 'fewf')
      setLoading(true)
      await nftTxn.wait()
      setLoading(false)
      setIsOpen(false)

      console.log('mined, see transaction h')
    }
  } catch (error) {
    setLoading(false)
    console.log(error, 'e')
  }
}

const UploadNftModal: any = ({ isOpen, setIsOpen }: any) => {
  // const { setNftList } = useContext(AppContext)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [file, setFile] = useState('')

  const NFT_COLLECTION_MUMBAI_CONTRACT = 'YOUR_CONTRACT_ID'
  // const nft = useNFTCollection(NFT_COLLECTION_MUMBAI_CONTRACT)

  const onChangeHandle = (event: any) => {
    setFile(event.target.files[0])
  }
  // const address = useAddress()
  const address = 'true'
  const form = useForm({
    initialValues: {
      name: '',
      description,
      file: file,
    },
  })

  const onClose = () => {
    setIsOpen(false)
  }

  console.log(isOpen, 'uploda nft modal', form.values)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onClick = () => {
    console.log('ss')
    mintNftHandler(form.values, setIsLoading, setIsOpen)
  }

  return (
    <>
      <div></div>
      <div>
        {/* {showShareModal && <ShareModal/>} */}
        {true && (
          <>
            <Modal
              opened={isOpen}
              onClose={onClose}
              title="Introduce yourself!"
            >
              <LoadingOverlay visible={isLoading} overlayBlur={2} />
              <form
                onSubmit={form.onSubmit((values) =>
                  mintNftHandler(values, setIsLoading, setIsOpen)
                )}
              >
                <TextInput
                  id="name"
                  type="text"
                  placeholder={'test'}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label={'Description'}
                  id="description"
                  type="text"
                  {...form.getInputProps('description')}
                />
                <NftDropZone
                  type={'file'}
                  id={file}
                  onChange={onChangeHandle}
                  {...form.getInputProps('file')}
                />
              </form>
              <Group>
                <RoundButton onClick={onClose}>Close</RoundButton>
                <RoundButton
                  // isLoading={isLoading}
                  type={'submit'}
                  onClick={onClick}
                >
                  Upload
                </RoundButton>
              </Group>
            </Modal>
          </>
        )}
      </div>
    </>
  )
}
export default UploadNftModal
