import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SocialMedia from 'components/organisms/SocialMedia';
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
  subtext: {
    width: '500px',
    margin: '10px 0',
  },
  wrapperRight: {
    [breakpoints.down('xs')]: {},
  },
}));

const MainVisual: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="main">
      <div className={classes.wrapperLeft}>
        <div>
          <h2>Privacy</h2>
          <h2>Scalability</h2>
          <h2>Distributed Systems</h2>
        </div>
        <h5 className={classes.subtext}>
          Hashcloak is an independent research lab that targets problems
          surrounding privacy-preserving technologies and blockchain
          infrastructure design.
        </h5>
        <SocialMedia />
      </div>
      <div className={classes.wrapperRight}>
        <img src={bg} alt="main-visual-bg" />
      </div>
    </div>
  );
};

export default MainVisual;
