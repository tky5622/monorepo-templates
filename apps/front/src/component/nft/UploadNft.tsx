// import { Button } from '@mantine/core'
import { useState } from 'react'
import RoundButton from '../shared/RoundButton'
import UploadNftModal from './UploadNftModal'

const UploadNFTButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen, 'isOpen')
  return (
    <div>
      <UploadNftModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <RoundButton onClick={() => setIsOpen(true)} />
    </div>
  )
}

export default UploadNFTButton
