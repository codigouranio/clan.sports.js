/**
 * Navbar component landing page
 *
 * */
import { IconDiscord, IconGithub, LogoNav } from '@/components/atoms';
import { Flex, Spacer } from '@chakra-ui/react';

export const Navbar: React.FC = () => {
  return (
    <Flex as="nav" alignItems="center" height="100px" padding="10px">
      <LogoNav />

      <Spacer />

      <Flex as="div" w="100px" justifyContent="space-evenly">
        <IconDiscord
          width={7}
          height={7}
          color={'#9fc1d5'}
          cursorPointer={'pointer'}
          colorHover={'#708795'}
        />

        <IconGithub
          width={6}
          height={7}
          color="#9fc1d5"
          cursorPointer={'pointer'}
          colorHover={'#708795'}
        />
      </Flex>
    </Flex>
  );
};
