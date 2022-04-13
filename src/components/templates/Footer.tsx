import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import elementLogo from '../../assets/element-logo.svg';
import twitterLogo from '../../assets/twitter-logo.png';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    paddingTop: '.5rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    boxSizing: 'border-box',
    marginTop: 'auto',
    [breakpoints.down('sm')]: {
      paddingRight: '.8rem',
      paddingLeft: '.8rem',
    },
  },
  wrapper: {
    width: '100%',
    paddingBottom: '1.2rem',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2000,
    [breakpoints.down('sm')]: {
      paddingBottom: '.6rem',
    },
  },
  small: {
    fontSize: '14px',
    color: '#868686',
    marginRight: '1rem',
    [breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  logo: {
    object: 'fit',
    width: '30px',
    marginRight: '20px',
    [breakpoints.down('sm')]: {
      width: '24px',
    },
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    color: '#ffff',
  },
  sns: {
    [breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
}));

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.texts}>
          <small className={classes.small}>{currentYear} HashCloak Inc.</small>
          <small className={classes.small}>
            Made with ❤️ by{' '}
            <a
              href="https://hashcloak.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HashCloak
            </a>
          </small>
        </div>
        <div className={classes.sns}>
          <a
            href="https://app.element.io/#/room/#meson-community:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={elementLogo}
              alt="element-logo"
              className={classes.logo}
            />
          </a>
          <a
            href="https://twitter.com/MesonMixnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className={classes.logo}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
