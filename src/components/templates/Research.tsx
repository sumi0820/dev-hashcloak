import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: '.7rem 25rem',
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

  contents: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  card: {
    width: '275px',
    marginBottom: '4px',
  },
}));

const Research: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="research">
      <div className={classes.header}>
        <h2 className={classes.title}>Research</h2>
        <h5>
          Here is a taste of the research we conduct and open problems we are
          currently tackling.
        </h5>
      </div>
      <div className={classes.contents}>
        <Card className={classes.card}>
          <CardContent>
            <h6>HoneyBadgerSwap: Making MPC as a Sidechain</h6>
            <small>2021</small>
            <p>
              It is well known that blockchains (just the public bulletin board
              part) on their own do not provide...
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h6>
              Blockchain is Watching You: Profiling and Deanonymizing Ethereum
              Users
            </h6>
            <small>2020</small>
            <p>
              Ethereum is the largest public blockchain by usage. It applies an
              account-based model...
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h6>
              Short Paper: Towards Characterizing Sybil Attacks in
              Cryptocurrency Mixers
            </h6>
            <small>2019</small>
            <p>
              Sybil attacks are a well-studied problem in peer-to-peer
              networking systems. However...
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Research;
