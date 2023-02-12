import { extendTheme } from '@chakra-ui/react';

export const gradientClan =
  'linear(to-br, clan.300,clan.400,clan.500,clan.600,clan.700)';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  colors: {
    clan: {
      50: '#ebf8ff',
      100: '#bee3f8',
      300: '#0ca7ff',
      400: '#0a92ff',
      500: '#087aff',
      600: '#0767ff',
      700: '#044aff',
      800: '#2C5282',
      900: '#1a365d',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'xl',
      },
      variants: {
        form: {
          width: '100%',
        },
      },
    },
  },
});

export default theme;
