import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

interface Props {
  width: number | string;
  height: number | string;
  color: string;
  cursorPointer: 'pointer';
  colorHover?: string;
}

export const IconDiscord: React.FC<Props> = ({
  width,
  height,
  color,
  cursorPointer,
  colorHover,
}) => {
  return (
    <Link
      href="https://discord.gg/eED2UD7c"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        as={FaDiscord}
        w={width}
        h={height}
        color={color}
        _hover={{
          cursor: cursorPointer,
          color: colorHover,
        }}
      />
    </Link>
  );
};
