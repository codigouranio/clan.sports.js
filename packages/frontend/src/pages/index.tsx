//--Chakra-Ui
import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
//--Layout
import { MainLayout } from 'src/components/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Heading>Home Page</Heading>
      <h1>HOLA!</h1>
    </MainLayout>
  );
};
export default Home;
