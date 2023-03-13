// Chakra
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
//Icons
import { MdEmail } from 'react-icons/md';

interface Props {
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginBottom?: string | number;
}

export const InputEmail: React.FC<Props> = ({
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
}) => {
  return (
    <InputGroup
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
    >
      <InputLeftElement pointerEvents="none">
        <Icon color="gray.400" as={MdEmail} />
      </InputLeftElement>
      <Input
        borderRadius="xl"
        color="gray.500"
        fontWeight={500}
        type="email"
        variant="filled"
        placeholder="Email"
      />
    </InputGroup>
  );
};
