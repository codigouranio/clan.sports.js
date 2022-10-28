import React from 'react'
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'

interface Props {
    color: string
  }

export const InputUserName: React.FC<Props> = ({ color }) => {
  return (
      <InputGroup>

        <InputLeftElement color={color}>
          <Icon as={BiUser}/>
        </InputLeftElement>

        <Input placeholder="User Name" type="text"/>
      </InputGroup>
  )
}
