import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Paper from  '@material-ui/core/Paper';

export default function BillDetailsCard({children,...props}) {
 const billdetails=props.billdetails;
  return (
   <Paper style={{width:'1000px'}}>
     <Grid container alignItems="center" >
        <Grid style={{paddingLeft:"150px" , paddingTop:"50px"}} item xs={6} >
        <Typography  variant="body2" component="span">
         <span style={{fontWeight:'bold'}}> Community: </span> {billdetails.communityname}         
        </Typography>
        <br/>    <br/>    <br/>
        <Typography  variant="body2" component="span">
        <span style={{fontWeight:'bold'}}> Type:  </span> {billdetails.category} 
        </Typography>
        <br/>    <br/>    <br/>
        <Typography variant="body2" component="span">
        <span style={{fontWeight:'bold'}}> Amount: </span>{billdetails.amt}
        <br/>    <br/>    <br/>
            
            </Typography>
                
           </Grid>
           <Grid  style={{ paddingTop:"50px"}} item xs={6}>
           <Typography   variant="body2" component="span">
           <span style={{fontWeight:'bold'}}> Apartment: </span> {billdetails.aptname}         
        </Typography>
        <br/>    <br/>    <br/>
        <Typography variant="body2" component="span">
        <span style={{fontWeight:'bold'}}>  Period:   </span> {billdetails.period} 
        </Typography>
        <br/>    <br/>    <br/>
        <Typography variant="body2" component="span">
        <span style={{fontWeight:'bold'}}>  Due Date: </span>{billdetails.dueat}
        <br/>    <br/>    <br/>
            
            </Typography>
                
               
           </Grid>
           
           </Grid>
    </Paper>
   
  );
}
