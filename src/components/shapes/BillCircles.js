import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    commonStyles :{
        background: 'linear-gradient(81.96deg, #66C74E -0.53%, rgba(102, 199, 78, 0.5) 98.86%);',
        borderColor: 'gray',
    
        borderRadius: '50%' ,
      
        width: '10rem',
        height: '10rem',
      },
       circleAmount: {
        marginTop:'50px',
        color:'white',
        fontWeight:'bold',
       padding:'5px',
        marginLeft:'35px',
        fontSize:'24px',
        width:'110px'
  }
}));


export default function BillCircles() {
    const classes = useStyles();

  return (

    <Grid
    container
    direction="column"
    justifyContent="space-between"
    alignItems="center"
   
  >
     
      
       <div  style={{   marginTop:'50px'}}> Total Due</div>
        <Box className={classes.commonStyles}>
            <div className={classes.circleAmount}>34,500 </div></Box>
         
      
       <div  style={{   marginTop:'50px'}}> Collected</div>
      <Box className={classes.commonStyles}>
      <div className={classes.circleAmount}>34,500 </div></Box>
         
      
       <div  style={{   marginTop:'50px'}}> Due</div>
      <Box className={classes.commonStyles}>
      <div className={classes.circleAmount}>34,500 </div></Box>
     
   </Grid>
  
  );
}