
import React from 'react';
import ChipsArray from "./components/chips/ChipsArray";
import TimeSlotModal from "./components/Dialog/TimeSlotModal";
import RangeSlider from "./components/Sliders/RangeSlider";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function App() {
  const[key,setKey]=React.useState(0);
  const[value,setValue]=React.useState(null);
  const [chipData, setChipData] = React.useState([
   
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleAdd=(chipToAdd)=>()=>{
    //setChipData((chips) => chips.push(chipToAdd));
    setChipData(chipData => [...chipData, chipToAdd]);
    setKey(key+1);
  }
return(
  <>
  <TextField value={value} onChange={(e)=>{setValue(e.target.value)}} label="Chip Name" variant="outlined"/>
  <Button onClick={handleAdd({key: key, label: value})} >ADD</Button>

  <ChipsArray chipData={chipData} key={key} handleDelete={handleDelete} handleAdd={handleAdd} />
  </>
) 

}

export default App;
