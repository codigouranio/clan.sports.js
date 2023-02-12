/*
 * Component Icon Discord with link server discord
 * */
import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

interface Props {
  width: number | string;
  height: number | string;
  color: string;
  cursorPointer: 'pointer';
  href?: string;
  colorHover?: string;
}

export const IconDiscord: React.FC<Props> = ({
  width,
  height,
  color,
  cursorPointer,
  colorHover,
  href,
}) => {
  return (
    <Link
      href={href || 'https://discord.com/'}
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
