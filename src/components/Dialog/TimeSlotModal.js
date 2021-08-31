import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
TimeSlotModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
export default function TimeSlotModal(props) {
  const classes = useStyles();
  
    const [timeslot,setTimeSlot]=React.useState();


    const handleSubmit=()=>
    {
        props.onSubmit(timeslot);
    }

  return (
    <Dialog onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle id="simple-dialog-title">Select Time Slot</DialogTitle>
      <DialogContent>  <TextField  autoFocus
            margin="dense"  id="timeslot" name="timeslot"  fullWidth value={timeslot} onChange={(e)=>{setTimeSlot(e.target.value)}} label="Time Slot" variant="outlined"/>
        </DialogContent>
        <DialogActions>
            
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
    </Dialog>
  );
}


