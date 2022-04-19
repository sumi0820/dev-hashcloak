import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import SocialMedia from 'components/organisms/SocialMedia';
import bg from '../../assets/main-visual-bg.png';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundImage: 'linear-gradient(to right bottom, #2eb3ff, #fff)',
    color: 'white',
    padding: '.7rem 18rem',
    [breakpoints.down('md')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      padding: '0px 2rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  wrapperLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    zIndex: 2,
    [breakpoints.down('md')]: {
      width: '50%',
    },
    [breakpoints.down('xs')]: {
      alignItems: 'center',
      width: '100%',
    },
  },
  title: {
    [breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  subtext: {
    width: '500px',
    margin: '10px 0',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  wrapperRight: {
    objectFit: 'contain',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  background: {
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const MainVisual: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="main">
      <div className={classes.wrapperLeft}>
        <div className={classes.title}>
          <h2>Building </h2>
          <h2>Vertically-Integrated</h2>
          <h2>Privacy By Defaults</h2>
        </div>
        <h5 className={classes.subtext}>
          HashCloak is an independent research lab focused on helping
          organizations and blockchain communities integrate a privacy-first
          approach into their processes.
        </h5>
        {/* <SocialMedia /> */}
      </div>
      <div className={classes.wrapperRight}>
        <img src={bg} alt="main-visual-bg" className={classes.background} />
      </div>
    </div>
  );
};

export default MainVisual;
