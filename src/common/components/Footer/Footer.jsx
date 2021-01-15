import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { UserContext } from '../../state/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const {user, updateUser} = useContext(UserContext);

  
  const logOut = () => {
    user.auth = false;
    user.userName = "";
    user.selectedAssociate = {
      name:null,
      email:null,
    }
    updateUser({user});
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {user && (
            <Fragment>
              <Typography variant="h6" className={classes.title}>
                {user.selectedAssociate.name && (`Associate selected: ${user.selectedAssociate.name}, ${user.selectedAssociate.email}`)}
              </Typography>
              {user.auth && (
                <Button onClickCapture={logOut} variant="contained">Logout</Button>
              )}
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
