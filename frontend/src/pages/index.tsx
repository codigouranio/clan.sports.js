import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'

import { MainLayout } from 'src/components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Heading>Home Page</Heading>
    </MainLayout>
  )
}
export default Home
