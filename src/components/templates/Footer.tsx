import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import githubLogo from '../../assets/github-logo.png';
import twitterLogo from '../../assets/twitter-logo-white.png';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #2eb3ff, #000000)',
    padding: '.7rem 10rem',
    width: '100%',
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      paddingRight: '4rem',
      paddingLeft: '4em',
    },
  },
  logo: {
    objectFit: 'contain',
    width: '36px',
    marginLeft: '10px',
  },
  contentLeft: {
    color: 'white',
    textAlign: 'left',
  },
  contentRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.contentLeft}>
          <p>{currentYear} HashCloak Inc.</p>
        </Grid>
        <Grid item xs={6} style={{}} className={classes.contentRight}>
          <a
            href="https://twitter.com/hashcloak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className={classes.logo}
            />
          </a>
          <a
            href="https://github.com/hashcloak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="github-logo" className={classes.logo} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
