/*LogoNav componen logo in navbar with landing page
 *
 * */
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import logo from '/public/logo_cs_negro.svg';

export const LogoNav: React.FC = () => {
  return (
    <Box maxWidth="100px">
      <Image src={logo} alt="Logo Clan Sports" />
    </Box>
  );
};
