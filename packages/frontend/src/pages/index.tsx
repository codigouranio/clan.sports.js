//--Chakra-Ui
import { InputButton, Navbar } from '@/components/molecules';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from 'src/components/layouts';

import imageHeader from '../../public/image-header.jpg';

//  TODO:x Optimization the image for header
//       x Icons the Git, Discord in navbar
//       x Create Icons components
//       - Create toogle dark mode and theme dark
//       x Divide the page by components
//       - Create more information section
//       - Realize contributor section

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container p={0} m="0 auto" maxWidth="1020px">
        <Box as="header">
          <Navbar />

          <Flex justifyContent="space-between" alignItems="center">
            <Box maxW="45%" marginTop="1rem" textAlign="center">
              <Heading as="h2" fontSize="4xl">
                Connecting the next generation of geniuses
              </Heading>

              <Text fontSize="lg" marginTop="25px" color="gray.500">
                Clan Sports will be social plataform to link young people with
                extracurricular activity instrutions.
              </Text>

              <InputButton content="Join Waitlist" placeholder="E-mail" />
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
      </Container>
    </MainLayout>
  );
};
export default Home;
