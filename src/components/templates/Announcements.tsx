import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blogs from '../../assets/announcements-blogs.png';
import newsletter from '../../assets/announcements-newsletter.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
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
    [breakpoints.down('md')]: {
      whiteSpace: 'normal',
    },
  },
  subtitle: {
    color: palette.primary.dark,
  },
  contents: {
    display: 'flex',
    justifyContent: 'space-around',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 4px',
    width: '300px',
    [breakpoints.down('sm')]: {
      marginBottom: '30px',
    },
  },
}));

const Announcements: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="announcements">
      <div className={classes.header}>
        <h2 className={classes.title}>Keeping up HashCloak</h2>
      </div>
      <div className={classes.contents}>
        <div className={classes.content}>
          <a
            href="https://write.as/hashcloaks-blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blogs} alt="blog" />
            <h5>Research</h5>
          </a>
        </div>
        <div className={classes.content}>
          <a
            href="https://hashcloak.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={newsletter} alt="newsletter" />
            <h5>HashCloak Newsletter</h5>
            <p>
              Periodic updates about current HashCloak projects and offerings
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
