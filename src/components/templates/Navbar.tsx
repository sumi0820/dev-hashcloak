import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import BurgerMenu from 'components/organisms/BurgerMenu';
import logo from '../../assets/company-logo.png';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #2eb3ff, #000000)',
    padding: '.7rem 18rem',
    position: 'fixed',
    top: '0',
    width: '100%',
    boxShadow: '0 1px 1px -1px rgba(0, 0, 0, 0.5)',
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
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: 'white',
    margin: '0 4px',
  },
  burger: {
    display: 'none',
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <HashLink to="#main" smooth className={classes.link}>
        <img src={logo} alt="logo" />
      </HashLink>
      <div className={classes.content}>
        <HashLink to="#mission" smooth className={classes.link}>
          Mission
        </HashLink>
        <HashLink to="#products" smooth className={classes.link}>
          Products
        </HashLink>
        <HashLink to="#services" smooth className={classes.link}>
          Services
        </HashLink>
        <HashLink to="#research" smooth className={classes.link}>
          Research
        </HashLink>
        <HashLink to="#supporters" smooth className={classes.link}>
          Supporters
        </HashLink>
        <HashLink to="#announcements" smooth className={classes.link}>
          Announcements
        </HashLink>
        <HashLink to="#contact" smooth className={classes.link}>
          Contact
        </HashLink>
      </div>
      <div className={classes.burger}>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
