import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100vw',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    color: {
      backgroundColor: 'rgb(20, 117, 121)',
    }
  }),
);

type Prop3 = {
  islit: boolean,
  setlit: (bool: boolean) => void,
}

export const Header: React.FC<Prop3> = ({ islit, setlit }) => {
  const classes = useStyles();

  const themeHandle = () => {
    setlit(!islit);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={islit? '': classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Expense Tracker
          </Typography>
          <IconButton onClick={themeHandle} color="inherit">
            {islit ? <Brightness7Icon />: <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}