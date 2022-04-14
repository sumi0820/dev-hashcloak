import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mission from '../../assets/mission-image.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: '.7rem 25rem',
    [breakpoints.down('xs')]: {},
  },

  title: {
    color: palette.primary.dark,
    fontWeight: 'bold',
    marginTop: '10rem !important',
    marginBottom: '7rem !important',
    [breakpoints.down('sm')]: {},
    [breakpoints.down('xs')]: {},
  },
  subtitle: {
    color: palette.primary.dark,
    [breakpoints.down('sm')]: {},
    [breakpoints.down('xs')]: {},
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
  contents: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    objectFit: 'contain',
    width: '400px',
  },
  texts: {
    maxWidth: '500px',
    textAlign: 'left',
  },
}));

const Mission: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="mission">
      <h2 className={classes.title}>Our Mission</h2>
      <div className={classes.contents}>
        <img src={mission} alt="mission" className={classes.img} />
        <div className={classes.texts}>
          <h5 className={classes.subtitle}>Lorem Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur culpa itaque praesentium, molestiae qui nisi iste ullam
            soluta numquam cupiditate modi laborum odit! Minus dolor est sunt
            sed, amet itaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
