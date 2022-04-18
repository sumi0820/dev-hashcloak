import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from 'components/templates/Navbar';
import MainVisual from 'components/templates/MainVisual';
import Services from 'components/templates/Services';
import Mission from 'components/templates/Mission';
import Products from 'components/templates/Products';
import Research from 'components/templates/Research';
import Supporters from 'components/templates/Supporters';
import Announcements from 'components/templates/Announcements';
import Footer from '../templates/Footer';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0',
    minHeight: '100vh',
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
        <Mission />
        <Products />
        <Services />
        <Research />
        <Supporters />
        <Announcements />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
