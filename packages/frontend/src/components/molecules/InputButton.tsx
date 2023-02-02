/**
 * Component InputButton contiene un componente botón y entrada con un icono
 **/
import { Button, Flex, Input } from '@chakra-ui/react';
import { MdMail } from 'react-icons/md';

interface Props {
  content: string;
  placeholder: string;
}

export const InputButton: React.FC<Props> = ({ content, placeholder }) => {
  return (
    <Flex w="90%" margin="25px auto">
      <Input placeholder={placeholder} variant="filled" borderLeftRadius="xl" />
      <Button
        p={0}
        borderLeftRadius="0"
        w="70%"
        rightIcon={<MdMail />}
        colorScheme="clan"
      >
        {content}
      </Button>
    </Flex>
  );
};
