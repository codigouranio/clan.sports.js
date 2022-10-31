import React from 'react'

// Next
import logo from '../../../public/logo_cs_negro.svg'
import Image from 'next/image'

// Chackra
import { Box, Center, Img, Container, Flex, Heading } from '@chakra-ui/react'

// Components
import { MainLayout } from 'src/components/layouts/MainLayout'
import { ButtonGoogle } from 'src/components/atoms/ButtonGoogle'

const LoginPage: React.FC = () => {
  return (
  <MainLayout>
    <Center
      bgGradient="linear(to-br, clan.300, clan.400, clan.500, clan.600, clan.700)"
      width="100%"
      h="100vh"
      p={0}
      m={0}
    >
      <Box
        backgroundColor="clan.50"
        borderRadius="2xl"
        boxShadow="2xl"
        display="flex"
        p={6}
        flexDir="column"
        width="xl"
      >
        <Box maxWidth="250px" mx="auto">
          <Image src={logo} alt="Logo Clan Sports" width={150} height={150}/>
        </Box>
        <ButtonGoogle marginTop="20px"/>
      </Box>
    </Center>
  </MainLayout>
  )
}

export default LoginPage
