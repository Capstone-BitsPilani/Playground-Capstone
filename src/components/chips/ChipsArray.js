import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Button, Grid } from '@material-ui/core';
import { GridRow } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray({...props}) {
  const classes = useStyles();
  const {chipData}=props;

  return (
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center">
   
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
      
        return (
          
        
       
          
          <li key={data.key}>
            <Chip
             
              label={data.label}
              onDelete={props.handleDelete(data)}
              className={classes.chip}
            />
          </li>
         
        
        );
      })}
    </Paper>
    </Grid>
  );
}