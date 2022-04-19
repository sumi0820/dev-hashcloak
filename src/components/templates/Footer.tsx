import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SocialMedia from 'components/organisms/SocialMedia';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #2eb3ff, #000000)',
    padding: '.7rem 10rem',
    width: '100%',
    [breakpoints.down('md')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      paddingRight: '2rem',
      paddingLeft: '2em',
    },
  },
  contentLeft: {
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  contentRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.contentLeft}>
          <p style={{ color: '#fff', margin: '0 0' }}>
            {currentYear} HashCloak Inc.
          </p>
        </Grid>
        <Grid item xs={6} className={classes.contentRight}>
          <SocialMedia />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
