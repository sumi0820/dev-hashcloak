import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    [breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      minHeight: '0',
    },
  },
  wrapperLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    [breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  title: {
    color: palette.primary.main,
    fontWeight: 'bold',
    marginTop: '0px',

    [breakpoints.down('sm')]: {
      fontSize: '60px',
    },
    [breakpoints.down('xs')]: {
      fontSize: '48px',
    },
  },
  subtext: {
    maxWidth: '600px',
    fontSize: '1.5rem',
    marginTop: '-60px',
    fontStyle: 'italic',
    lineHeight: '1.1em',
    [breakpoints.down('sm')]: {
      fontSize: '24px',
      marginTop: '-30px',
    },
    [breakpoints.down('xs')]: {
      fontSize: '20px',
      marginTop: '-10px',
    },
  },
  wrapperRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    maxHeight: '300px',
    [breakpoints.down('sm')]: {
      objectFit: 'contain',
      maxHeight: '200px',
    },
    [breakpoints.down('xs')]: {
      objectFit: 'contain',
      maxHeight: '150px',
    },
  },
  text: {
    fontWeight: 'normal',
    marginTop: '-30px',
    color: palette.secondary.dark,
    [breakpoints.down('sm')]: {
      fontSize: '24px',
      marginTop: '-10px',
    },
    [breakpoints.down('xs')]: {
      fontSize: '20px',
      marginTop: '-6px',
    },
  },

  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'space-between',
  },
  button: {
    backgroundColor: palette.primary.main,
    color: '#ffffff',
    margin: '0 5px',
    '&:hover': {
      background: palette.primary.dark,
      color: '#ffffff',
    },
    [breakpoints.down('xs')]: {
      fontSize: '.7rem',
      margin: '0 3px',
      padding: '.2rem .2rem .2rem .2rem',
    },
  },
  card: {
    margin: 48,
    width: '300px',
  },
}));

const Services: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="services">
      <div className={classes.wrapperLeft}>
        <h1>Services</h1>
      </div>
    </div>
  );
};

export default Services;
