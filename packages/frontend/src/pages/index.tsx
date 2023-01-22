//--Chakra-Ui
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
} from '@chakra-ui/react';
//--- Next
import type { NextPage } from 'next';
import Image from 'next/image';
import { MdMail } from 'react-icons/md';
//-- Components
import { ButtonLargeIcon } from 'src/components/atoms';
//--Layout
import { MainLayout } from 'src/components/layouts';

//-- Assets
import imageHeader from '../../public/image-header.jpg';
import logo from '../../public/logo_cs_negro.svg';

//  TODO:- Optimization the image for header
//       - Icons the Git, Twitch y Discord in navbar
//       - Divide the page by components
//       - Create more information section
//       - Realize contributor section

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container p={0} m="0 auto" maxWidth="1020px">
        <Box as="header">
          {
            //----NavBar
          }
          <Flex as="nav" alignItems="center" height="100px" padding="10px">
            <Box maxWidth="100px">
              <Image src={logo} alt="Logo Clan Sports" />
            </Box>
            <Spacer />
            <Box>
              <ButtonLargeIcon content="Login" />
            </Box>
          </Flex>
          {
            //-----Finish NavBar
          }
          <Flex justifyContent="space-between" alignItems="center">
            <Box maxW="45%" marginTop="1rem" textAlign="center">
              <Heading as="h2" fontSize="4xl">
                Connecting the next generation of geniuses
              </Heading>

              <Text fontSize="lg" marginTop="25px" color="gray.500">
                Clan Sports will be social plataform to link young people with
                extracurricular activity instrutions.
              </Text>

              {
                // Input Button
              }

              <Flex w="90%" margin="25px auto">
                <Input
                  placeholder="E-mail"
                  variant="filled"
                  borderLeftRadius="xl"
                />
                <Button
                  p={0}
                  borderLeftRadius="0"
                  w="70%"
                  rightIcon={<MdMail />}
                  colorScheme="clan"
                >
                  Join Waitlist
                </Button>
              </Flex>
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
