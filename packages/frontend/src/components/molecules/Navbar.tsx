/**
 * Navbar component landing page
 *
 * */
import { IconDiscord, IconGithub, LogoNav } from '@/components/atoms';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <Box pos="fixed" top={5} width="100%" px={5}>
      <Flex
        maxW="1200px"
        mx="auto"
        bg="gray.100"
        align="center"
        borderRadius="2rem"
        h="60px"
        justifyContent="space-between"
        px={5}
        boxShadow="lg"
      >
        <LogoNav />

        <Spacer />

        <Flex as="ul" w="20%" justifyContent="space-between">
          <Text as="p" fontWeight="medium">
            <Link href="#">Team</Link>
          </Text>

          <Text as="p" fontWeight="medium">
            <Link href="#">Blog</Link>
          </Text>

          <Text as="p" fontWeight="medium">
            <Link href="#">About</Link>
          </Text>
        </Flex>

        <Spacer />

        <Flex
          as="div"
          w="100px"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IconDiscord
            width={7}
            height={6}
            color={'gray.400'}
            cursorPointer={'pointer'}
            colorHover={'clan.300'}
            href="https://discord.gg/eED2UD7c"
          />

          <IconGithub
            width={6}
            height={6}
            color="gray.400"
            cursorPointer={'pointer'}
            colorHover={'clan.300'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
