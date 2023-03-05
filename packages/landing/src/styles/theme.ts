import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';
import '@fontsource/blinker';

export const gradientClan =
  'linear(to-br, clan.300,clan.400,clan.500,clan.600,clan.700)';

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: 'hidden',
        margin: '0px',
      },
      main: {
        width: '100vw',
        height: '700vw',
        zIndex: '99',
        position: 'absolute',
        justifyContent: 'center',
        textAlign: 'center',
        pointerEvents: 'none',
        fontSize: '8vh',
        background:
          'linear-gradient(180deg, rgba(12,165,255,1) 0%, rgba(8,126,255,1) 22%, rgba(4,74,255,1) 100%)',
        '.progressBar': {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          height: '10px',
          background: 'rgba(0,237,255,0.5972514005602241)',
          transformOrigin: '0%',
        },
      },
      section: {
        fontFamily: `blinker, sans-serif`,
        minHeight: '100vh',
        padding: '120px',
        fontSize: '5vh',
        h1: {
          color: 'white',
          fontSize: '10vh',
          fontWeight: '800',
        },
        h2: {
          color: 'white',
          fontSize: '3vh',
          fontWeight: '900',
        },
      },
    }),
  },
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
