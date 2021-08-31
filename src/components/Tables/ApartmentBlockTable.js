import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState,useCallback} from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { orange } from '@material-ui/core/colors';
import {Button} from '@material-ui/core';
import { SlowMotionVideoOutlined } from '@material-ui/icons';
const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
    field: 'block',
    headerName: 'Block',
    width: 150,
    editable: true,
  },
  {
    field: 'floors',
    headerName: 'Floors',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'flats',
    headerName: 'Flats',
    type: 'number',
    width: 110,
    editable: true,
  }
];

const const_rows = [
  { id:1, block: 'Snow', floors: 5, flats: 35 },
  {  id:2,block: 'Lannister', floors: 3, flats: 42 },
  { id:3, block: 'Lannister', floors: 3, flats: 45 },
  {  id:4, block: 'Stark', floors: 2, flats: 16 },
  {  id:5, block: 'Targaryen', floors: 5, flats: 56 },
  { id:6, block: 'Melisandre', floors: 4, flats: 150 },
  {  id:7,block: 'Clifford', floors: 3, flats: 44 },
  { id:8,block: 'Frances', floors: 3, flats: 36 },
  { id:9, block: 'Roxie', floors: 3, flats: 65 }
];


export default function ApartmentBlockTable({...props}) {
 const [rows,setRows]=useState([]);
 const[id,setId]=useState(1);
 
 const addBlock=useCallback(() => {
    console.log(id);
    console.log(rows);
    setId(id+1,
    setRows([...rows,{ id:id, block: '', floors: 0, flats: 0}]));
    console.log(id);
}, [rows])
 
  return (
      <>
      <Button   variant="contained" style ={{backgroundColor: orange[500] }} 
               startIcon={<AddCircleOutlineIcon />} onClick={addBlock}>Add Block</Button>
    <div style={{ height: 400, width: '80%' }}>
          
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  );
}
