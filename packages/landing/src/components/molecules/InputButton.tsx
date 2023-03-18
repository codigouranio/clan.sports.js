/**
 * Component InputButton contiene un componente botón y entrada con un icono
 **/
import { gradientClan } from '@/styles/theme';
import { Button, Flex, Input } from '@chakra-ui/react';
import { MdMail } from 'react-icons/md';

interface Props {
  content: string;
  placeholder: string;
}

export const InputButton: React.FC<Props> = ({ content, placeholder }) => {
  return (
    <Flex w="90%" margin="25px auto" boxShadow="lg">
      <Input
        placeholder={placeholder}
        variant="filled"
        borderLeftRadius="xl"
        borderRightRadius="0"
      />

      <Button
        p={0}
        borderLeftRadius="0"
        bgGradient={gradientClan}
        color="white"
        w="70%"
        rightIcon={<MdMail />}
      >
        {content}
      </Button>
    </Flex>
  );
};
