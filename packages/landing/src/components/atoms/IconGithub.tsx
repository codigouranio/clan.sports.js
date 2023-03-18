import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

interface Props {
  width: number | string;
  height: number | string;
  color: string;
  cursorPointer: 'pointer';
  colorHover?: string;
}

export const IconGithub: React.FC<Props> = ({
  width,
  height,
  color,
  cursorPointer,
  colorHover,
}) => {
  return (
    <Link
      href="https://github.com/codigouranio/clan.sports"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        as={BsGithub}
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
