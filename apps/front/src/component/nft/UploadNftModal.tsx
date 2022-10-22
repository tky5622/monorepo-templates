import { Group, Modal } from '@mantine/core'

// import { useAddress, useNFTCollection } from '@thirdweb-dev/react'
import { useState } from 'react'

import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
// import { NFTMetadataOwner } from '@thirdweb-dev/sdk'
// import { AppContext } from '../App'
// import { NFT_COLLECTION_MUMBAI_CONTRACT } from '../config/contracts'
import RoundButton from '../shared/RoundButton'
import NftDropZone from './NftDropZone'

const UploadNftModal: any = ({ isOpen, setIsOpened }: any) => {
  // const { setNftList } = useContext(AppContext)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [file, setFile] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
    setIsOpened(false)
  }

  console.log(isOpen, 'uploda nft modal')

  return (
    <>
    <p>dewfewfwfwff</p>
      {true && (
        <>
          <Modal opened={true} onClose={onClose} title="Introduce yourself!">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                onClick={console.log()}
              >
                Upload
              </RoundButton>
            </Group>
          </Modal>
        </>
      )}
    </>
  )
}
export default UploadNftModal
