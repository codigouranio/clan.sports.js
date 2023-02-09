import { InputButton, Navbar } from '@/components/molecules';
import { gradientClan } from '@/styles/theme';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import imageHeader from '../../public/image-header.jpg';

/* 
  TODO:x Optimization the image for header
       x Icons the Git, Discord in navbar
       x Create Icons components
       x Divide the page by components
       x Create background color gradient
       x Create Navbar styles 
       - Mobile styles
       - Create toogle dark mode and theme dark
       - Create more information section
       - Create project plannig
       - Realize contributor section
*/

const Home: NextPage = () => {
  return (
    <>
      <Box paddingTop="120px" height="1000px">
        <Navbar />
        <Flex
          as="header"
          maxW="1020px"
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
        >
          <Box maxW="45%" marginTop="1rem" textAlign="center">
            <Heading
              as="h2"
              fontSize="5xl"
              color="gray.50"
              bgGradient={gradientClan}
              bgClip="text"
            >
              Connecting the next generation of geniuses
            </Heading>

            <Text fontSize="lg" marginTop="1rem" color="gray.900">
              Clan Sports will be social plataform to link young people with
              extracurricular activity instrutions.
            </Text>

            <Box marginTop="5rem">
              <Text fontSize="lg" marginTop="1rem" color="gray.900">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </Text>

              <InputButton content="Join Waitlist" placeholder="E-mail" />
            </Box>
          </Box>

          <Box maxW="60%">
            <Image
              src={imageHeader}
              alt="Image Header"
              width={500}
              height={500}
            />
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading as="h2"> Seccion information</Heading>
      </Box>
    </>
  );
};
export default Home;
