import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from 'components/Routes';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          WebkitFontSmoothing: 'auto',
          margin: 0,
          padding: 0,
          backgroundColor: '#ffff',
        },
        h1: {
          fontSize: '96px',
          fontFamily: 'Montserrat,sans-serif',
          [breakpoints.up('sm')]: {
            fontSize: '60px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
        h2: {
          fontSize: '60px',
          fontFamily: 'Montserrat,sans-serif',
          margin: '0 !important',
          lineHeight: '90%',
          [breakpoints.up('sm')]: {
            fontSize: '48px',
            whiteSpace: 'nowrap',
            margin: '5px 0 !important',
          },
          [breakpoints.down('xs')]: {
            fontSize: '2.1rem',
            margin: '8px 0 !important',
          },
        },
        h3: {
          fontSize: '48px',
          fontFamily: 'Montserrat,sans-serif',
          [breakpoints.up('sm')]: {
            fontSize: '34px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        h4: {
          fontSize: '34px',
          fontFamily: 'Montserrat,sans-serif',
          margin: '0',
          [breakpoints.down('sm')]: {
            fontSize: '24px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        h5: {
          fontSize: '24px',
          fontFamily: 'Montserrat,sans-serif',
          margin: '0',
          lineHeight: '90%',
          [breakpoints.down('sm')]: {
            fontSize: '20px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.9rem',
          },
        },
        h6: {
          fontSize: '18px',
          fontFamily: 'Montserrat,sans-serif',
          margin: '0',
          lineHeight: '90%',
          [breakpoints.down('sm')]: {
            fontSize: '16px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        p: {
          fontSize: '16px',
          fontFamily: 'Amiko ,sans-serif',
          letterSpacing: '-0.05em',
          [breakpoints.down('sm')]: {
            fontSize: '14px',
          },
        },
        li: {
          fontSize: '16px',
          fontFamily: 'Amiko ,sans-serif',
          letterSpacing: '0em',
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        ul: {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
        a: {
          fontFamily: 'Amiko ,sans-serif',
          fontSize: '16px',
          color: '#38C6F4',
          letterSpacing: '-0.05em',
          fontWeight: 'bold',
          textDecoration: 'none',
          textAlign: 'center',
          '&:hover': {
            color: '#FF9169',
          },
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#FF9169',
      main: '#38C6F4',
      dark: '#0084CB',
    },
    secondary: {
      main: '#ffff',
      dark: '#868686',
    },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Routes />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
