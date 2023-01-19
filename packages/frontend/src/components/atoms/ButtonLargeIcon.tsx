/**
 * ButtonLargeIcon: button variant 'solid' that can have an icon on the left.
 * */
import { Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';

interface Props {
  content: string;
  margin?: string | number;
  padding?: string | number;
}

export const ButtonLargeIcon: React.FC<Props> = ({
  content,
  margin,
  padding,
}) => {
  return (
    <Button
      rightIcon={<FiLogIn />}
      variant="solid"
      colorScheme="clan"
      m={margin || 'default'}
      p={padding || 'default'}
    >
      {content}
    </Button>
  );
};
