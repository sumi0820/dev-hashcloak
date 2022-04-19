import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bespoke from '../../assets/services-bespoke.png';
import audits from '../../assets/services-audits.png';
import advisory from '../../assets/services-advisory.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
    [breakpoints.down('xs')]: {},
  },
  header: {
    textAlign: 'center',
    marginTop: '10rem !important',
    marginBottom: '5rem !important',
  },
  title: {
    color: palette.primary.dark,
    fontWeight: 'bold',
    marginBottom: '2rem !important',
    [breakpoints.down('sm')]: {},
    [breakpoints.down('xs')]: {},
  },
  subtitle: {
    color: palette.primary.dark,
    [breakpoints.down('sm')]: {},
    [breakpoints.down('xs')]: {},
  },

  contents: {
    display: 'flex',
    alignItems: 'start',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 4px',
    maxWidth: '300px',
  },
}));

const Services: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="services">
      <div className={classes.header}>
        <h2 className={classes.title}>Services</h2>
      </div>
      <div className={classes.contents}>
        <div className={classes.content}>
          <img src={bespoke} alt="Bespoke" />
          <h5>Bespoke R&amp;D</h5>
          <p>
            Have a problem that can leverage anonymous network, ZKPs, MPC or
            another privacy enhancing technique?
            <br />
            We can help get you started and assist your team with the initial
            prototyping phase of integrating these tools into your product.
          </p>
        </div>
        <div className={classes.content}>
          <img src={audits} alt="security-audits" />
          <h5>Security Audits</h5>
          <p>
            We assist teams to securely integrate advanced cryptographic tooling
            into their product and conduct security reviews towards that end.
          </p>
        </div>
        <div className={classes.content}>
          <img src={advisory} alt="advisory" />
          <h5>Advisory</h5>
          <p>
            Need someone that can stay on top of the ongoings in the crypto
            (graphy and currency) space in order to get a step ahead of the
            competition?
            <br />
            We assist teams with developing strategies with respect to privacy
            enhancing technology in the fast moving cryptocurrency industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
