import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from 'components/templates/Navbar';
import MainVisual from 'components/templates/MainVisual';
import Services from 'components/templates/Services';
import Footer from '../templates/Footer';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0',
    minHeight: '100vh',
    // For new page
    overflowX: 'hidden',
    [breakpoints.down('md')]: {},
    [breakpoints.down('sm')]: {},
    [breakpoints.down('xs')]: {},

    '& > footer > div > div > small': {
      color: '#ffff',
    },
    '& > footer > div > div > small > a': {
      color: palette.primary.light,
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <MainVisual />
        <Services />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
