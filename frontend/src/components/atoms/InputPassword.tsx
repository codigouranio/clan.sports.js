import React, { useState } from 'react'

//Chakra UI
import { Input, InputLeftElement, InputGroup, Icon, InputRightElement, Button } from '@chakra-ui/react'

//Icons
import { RiLockPasswordFill } from 'react-icons/ri'
import { HiEye, HiEyeOff } from 'react-icons/hi'

interface Props {
  margin?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginLeft?: string | number
  marginBottom?: string | number
}

export const InputPassword: React.FC<Props> = ({
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
        <InputGroup
          margin={ margin }
          marginTop={ marginTop }
          marginRight={ marginRight }
          marginLeft={ marginLeft }
          marginBottom={ marginBottom }
        >
        <InputLeftElement pointerEvents="none">
          <Icon color="gray.400" as={ RiLockPasswordFill }/>
        </InputLeftElement>

          <Input
             borderRadius="xl"
             color="gray.500"
             fontWeight={ 500 }
             type={show ? 'text' : 'password'}
             variant="filled"
             placeholder="Password"
          />

          <InputRightElement>
            <Button onClick={handleClick} color="gray.400">
              {show ? <Icon as={HiEye}/> : <Icon as={HiEyeOff}/>}
            </Button>
          </InputRightElement>
        </InputGroup>
  )
}
