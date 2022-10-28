import React from 'react'

// Chackra
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import { MainLayout } from 'src/components/layouts/MainLayout'
import { ButtonGoogle } from 'src/components/atoms/ButtonGoogle'

const LoginPage: React.FC = () => {
  return (
  <MainLayout>
    <Container display="flex" maxWidth="container.lg" paddingTop={20} h="100vh" color="clan.principal">
      <Flex width="50%" alignItems="center" flexDir="column" >
        <Heading as='h2'>Login</Heading>
        <ButtonGoogle marginTop="20px"/>
        <Box mt="30px">
        </Box>
        <hr/>
      </Flex>

      <Container>
        <h2>Zona de Imagen
        </h2>
      </Container>
    </Container>
  </MainLayout>
  )
}

export default LoginPage
