import type { NextPage } from 'next';

//--Chakra-Ui
import { Heading } from '@chakra-ui/react';

//--Layout
import { MainLayout } from 'src/components/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Heading>Home Page</Heading>
    </MainLayout>
  );
};
export default Home;
