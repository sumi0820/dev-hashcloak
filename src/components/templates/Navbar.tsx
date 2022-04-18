import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
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
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      paddingRight: '4rem',
      paddingLeft: '4em',
    },
  },
  logo: {},
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      // display: 'none',
    },
    [breakpoints.down('xs')]: {
      paddingRight: '4rem',
      paddingLeft: '4em',
    },
  },
  link: {
    color: 'white',
    margin: '0 4px',
  },
}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <HashLink to="#main" smooth className={classes.link}>
        <img src={logo} alt="logo" className={classes.logo} />
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
        <HashLink to="#blog" smooth className={classes.link}>
          Blogs
        </HashLink>
        <HashLink to="#contact" smooth className={classes.link}>
          Contact
        </HashLink>
      </div>
    </header>
  );
};

export default Navbar;
