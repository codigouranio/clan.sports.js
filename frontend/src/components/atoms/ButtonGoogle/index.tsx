import React from 'react'
import { Button, Icon } from '@chakra-ui/react'
import { BsGoogle } from 'react-icons/bs'

interface Props {
    margin?: string | number
    marginTop?: string | number
    marginRight?: string | number
    marginLeft?: string | number
    marginBottom?: string | number
  }

export const ButtonGoogle: React.FC<Props> = ({ margin, marginTop, marginRight, marginLeft, marginBottom }) => {
  return (
     <Button
      colorScheme="clan"
      leftIcon={<Icon as={BsGoogle}/>}
      variant="solid"
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
    >
        Login with Google
     </Button>
  )
}
