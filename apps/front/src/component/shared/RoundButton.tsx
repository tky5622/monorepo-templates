import { Button } from '@mantine/core'

const RoundButton = ({ onclick, children }: any) => {
  return (
    <Button
      variant="light"
      radius="xl"
      size="md"
      styles={{
        root: { paddingRight: 14, height: 48 },
        rightIcon: { marginLeft: 22 },
      }}
      onClick={onclick}
    >
      {children}
    </Button>
  )
}

export default RoundButton
