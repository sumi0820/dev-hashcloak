import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import hakkaFinance from '../../assets/supporters-hakka-finance.svg';
import ethereumFoundation from '../../assets/supporters-ethereum-foundation.png';
import flashbots from '../../assets/supporters-flashbots.png';
import fuel from '../../assets/supporters-fuel.png';
import lightProtocol from '../../assets/supporters-light-protocol.svg';
import partnerProtocol from '../../assets/supporters-partner-protocol.png';
import perpetualProtocol from '../../assets/supporters-perpetual-protocol.png';
import sacredFinance from '../../assets/supporters-sacred-finance.svg';
import celo from '../../assets/supporters-celo.png';
import esp from '../../assets/supporters-esp.png';
import binance from '../../assets/supporters-binance-fellowship.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
    backgroundImage: 'linear-gradient(to left, #c0e3e5, #fff)',
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
    whiteSpace: 'normal',
    [breakpoints.down('md')]: {},
    [breakpoints.down('xs')]: {
      marginBottom: '.6rem !important',
    },
  },
  subtitle: {
    color: palette.primary.dark,
  },
  contents: {
    width: '100%',
    flexWrap: 'wrap',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [breakpoints.down('xs')]: {
      marginBottom: '40px',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    objectFit: 'contain',
    width: '200px',
    margin: '0 10px',
    [breakpoints.down('sm')]: {
      width: '180px',
    },
  },
  logoPng: {
    objectFit: 'contain',
    width: '100px',
    margin: '0 10px',
    [breakpoints.down('sm')]: {
      width: '80px',
    },
  },
}));

const Supporters: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="supporters">
      <div className={classes.header}>
        <h2 className={classes.title}>Clients</h2>
        <h5>
          We build vertically-intergrated privacy products for the
          cryptocurrency space.
        </h5>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.contents}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3} className={classes.content}>
          <img
            src={perpetualProtocol}
            alt="perpetual-protocol"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img
            src={hakkaFinance}
            alt="hakka-finance"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img
            src={partnerProtocol}
            alt="partner-protocol"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img
            src={sacredFinance}
            alt="sacred-finance"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img src={flashbots} alt="flashbots" className={classes.logoPng} />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img
            src={ethereumFoundation}
            alt="ethereum-foundation"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img
            src={lightProtocol}
            alt="light-protocol"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={3} className={classes.content}>
          <img src={fuel} alt="fuel" className={classes.logoPng} />
        </Grid>
      </Grid>

      <div className={classes.header}>
        <h2 className={classes.title}>Our work has been supported by</h2>
        <h5>
          We build vertically-intergrated privacy products for the
          cryptocurrency space.
        </h5>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.contents}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4} className={classes.content}>
          <img
            src={esp}
            alt="esp"
            className={classes.logo}
            style={{ width: '150px' }}
          />
        </Grid>
        <Grid item xs={4} className={classes.content}>
          <img src={binance} alt="binance" className={classes.logo} />
        </Grid>
        <Grid item xs={4} className={classes.content}>
          <img src={celo} alt="celo" className={classes.logo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Supporters;
