import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Timer = () => {
  const classes = useStyles();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = 0;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  return (
    <div id="timer" className={classes.root}>
      <label htmlFor="">Timer: {seconds}</label>
      <Button variant="contained" color="primary" onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </Button>
      <Button variant="contained" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default Timer;
