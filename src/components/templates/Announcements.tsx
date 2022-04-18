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
    justifyContent: 'space-around',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 4px',
    width: '300px',
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
