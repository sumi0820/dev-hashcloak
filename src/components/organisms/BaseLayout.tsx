import React, { ReactNode, VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

type ContainerProps = {
  children?: ReactNode;
  id?: string;
};

const useStyles = makeStyles(({ breakpoints }) => ({
  section: {
    display: 'flex',
    overflowX: 'hidden',
    justifyContent: 'center',
    flex: '1',
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

const LayoutContainer: VFC<ContainerProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.section}>{children}</section>
    </>
  );
};

export default LayoutContainer;
