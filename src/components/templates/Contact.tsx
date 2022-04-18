import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InlineWidget } from 'react-calendly';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
    backgroundColor: '#F6F9FB',
    [breakpoints.down('xs')]: {},
  },
  header: {
    textAlign: 'center',
    marginTop: '10rem !important',
    marginBottom: '5rem !important',
    width: '70%',
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
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="contact">
      <div className={classes.header}>
        <h2 className={classes.title}>Contact</h2>
        <h5>Schedule a free 30 minute consultation session</h5>
      </div>
      <InlineWidget
        url="https://calendly.com/hashcloak/30min"
        styles={{ height: '900px', width: '100%' }}
      />
    </div>
  );
};

export default Contact;
