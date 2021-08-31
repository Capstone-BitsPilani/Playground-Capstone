
import React from 'react';
import ChipsArray from "./components/chips/ChipsArray";
import TimeSlotModal from "./components/Dialog/TimeSlotModal";
import RangeSlider from "./components/Sliders/RangeSlider";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function App() {
  
 
const [open, setOpen] = React.useState(false);
const [selectedValue, setSelectedValue] = React.useState(emails[1]);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value) => {
  setOpen(false);
  setSelectedValue(value);
};

return (
  <div>
    <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
    <br />
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Open simple dialog
    </Button>
   <TimeSlotModal selectedValue={selectedValue} open={open} onClose={handleClose} />
  </div>
);
}

export default App;
