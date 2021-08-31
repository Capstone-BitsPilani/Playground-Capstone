import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Popup(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export const Alert = ({...props}) => {
    return (
        <Snackbar open={props.open} autoHideDuration={props.duration} onClose={props.handleClose}>
        <Popup onClose={props.handleClose} severity={props.type}>
          {props.message}
        </Popup>
      </Snackbar>
    )
}
