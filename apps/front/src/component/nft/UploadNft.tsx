// import { Button } from '@mantine/core'
import { useState } from 'react'
import RoundButton from '../shared/RoundButton'
import UploadNftModal from './UploadNftModal'

const UploadNFTButton = () => {
  const [isOpen, setIsOpened] = useState(false)
  return (
    <>
      <UploadNftModal isOpen={isOpen} setIsOpened={setIsOpened} />
      <RoundButton onClick={() => setIsOpened(true)} />
    </>
  )
}

export default UploadNFTButton
