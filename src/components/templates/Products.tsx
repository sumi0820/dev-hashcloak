import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mesonLogo from '../../assets/products-meson-logo.png';
import mesonSafeLogo from '../../assets/products-mesonSafe-logo.png';
import stoffelMPCLogo from '../../assets/products-stoffelMPC-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';
import githubLogo from '../../assets/github-logo-black.png';
import elementLogo from '../../assets/element-logo.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
    backgroundColor: '#F6F9FB',
    [breakpoints.down('md')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      padding: '5rem 2rem',
    },
  },
  header: {
    textAlign: 'center',
    marginTop: '10rem !important',
    marginBottom: '5rem !important',
    width: '70%',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.down('xs')]: {
      marginTop: '0 !important',
      marginBottom: '2rem !important',
    },
  },
  title: {
    color: palette.primary.dark,
    fontWeight: 'bold',
    marginBottom: '2rem !important',
    [breakpoints.down('xs')]: {
      marginBottom: '.6rem !important',
    },
  },

  contents: {
    display: 'flex',
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    [breakpoints.down('sm')]: {
      padding: '10px 0',
    },
  },
  logo: {
    objectFit: 'contain',
    width: '250px',
    [breakpoints.down('sm')]: {
      width: '200px',
    },
    [breakpoints.down('xs')]: {
      marginBottom: '-20px',
    },
  },
  biggerLogo: {
    objectFit: 'contain',
    maxWidth: '200px',
    [breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  texts: {
    maxWidth: '500px',
    textAlign: 'left',
  },
  socialMediaIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialMedia: {
    objectFit: 'contain',
    width: '30px',
    margin: '0 10px',
  },
  description: {
    color: palette.secondary.dark,
    marginTop: '0 !important',
    marginBottom: '6px !important',
    fontWeight: 'normal',
  },
}));

const Products: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="products">
      <div className={classes.header}>
        <h2 className={classes.title}>Products</h2>
        <h5>
          We build vertically-intergrated privacy products for the
          cryptocurrency space.
        </h5>
      </div>
      <div className={classes.contents}>
        <div className={classes.content}>
          <a
            href="https://mesonmix.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mesonLogo} alt="meson" className={classes.logo} />
            <h4>Meson</h4>
            <p className={classes.description}>
              A mix network for cryptocurrency transactions
            </p>
          </a>
          <div className={classes.socialMediaIcons}>
            <a
              href="https://app.element.io/#/room/#meson-community:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={elementLogo}
                alt="element"
                className={classes.socialMedia}
              />
            </a>
            <a
              href="https://twitter.com/MesonMixnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                alt="twitter"
                className={classes.socialMedia}
              />
            </a>
            <a
              href="https://docs.mesonmix.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="github"
                className={classes.socialMedia}
              />
            </a>
          </div>
        </div>
        <div className={classes.content}>
          <a href="https://google.com">
            <img
              src={mesonSafeLogo}
              alt="meson"
              className={classes.biggerLogo}
            />
            <h4>MesonSafe</h4>
            <p className={classes.description}>
              A privacy-focused wallet for managing your crypto assets
            </p>
          </a>
          <div className={classes.socialMediaIcons}>
            <a
              href="https://twitter.com/MesonMixnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                alt="twitter"
                className={classes.socialMedia}
              />
            </a>
            <a
              href="https://docs.mesonmix.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="github"
                className={classes.socialMedia}
              />
            </a>
          </div>
        </div>
        <div className={classes.content}>
          <a href="https://google.com">
            <img
              src={stoffelMPCLogo}
              alt="stoffelMPC"
              className={classes.logo}
            />
            <h4>StoffelMPC</h4>
            <p className={classes.description}>
              A framework for building expressive confidential blockchain
              applications using multiparty computation (MPC)
            </p>
          </a>
          <div className={classes.socialMediaIcons}>
            <a
              href="https://twitter.com/StoffelFinance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterLogo}
                alt="twitter"
                className={classes.socialMedia}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
