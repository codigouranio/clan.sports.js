import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

interface Props {
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  marginBottom?: string | number;
}

export const ButtonGoogle: React.FC<Props> = ({
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
}) => {
  return (
    <Button
      colorScheme="gray"
      leftIcon={<Icon as={FcGoogle} w={6} h={6} />}
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
    >
      Sign in with Google
    </Button>
  );
};
