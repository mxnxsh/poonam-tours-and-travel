import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    fontSize: 20,

  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={props.style}
        startIcon={props.icon}
        onClick={props.addCustomer}
      >
        {props.children}
      </Button>
      
    </div>
  );
}
