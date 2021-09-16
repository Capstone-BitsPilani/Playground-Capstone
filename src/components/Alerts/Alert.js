import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function AlertBox(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Popup(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export const Alert = ({...props}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
    
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertBox onClose={handleClose} severity={props.type}>
          {props.message}
        </AlertBox>
      </Snackbar>
      
     
    </div>
  );
}
