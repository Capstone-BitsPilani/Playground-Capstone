import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';

export default function MyRideCard() {
return (
<Paper elevation={5} style={{  marginLeft: '100px', padding:'10px', marginTop:'50px', width: '800px'}}>
  <Grid container column justifyContent="space-between" alignItems="center">

    <Grid container row justifyContent="space-between" alignItems="center">


      <Avatar style={{height:'100px', padding:'30px',width:'100px'}} alt="complex" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <Grid item  >

      <Typography gutterBottom variant="h5" component="div">
        Tata Tiago NRG
      </Typography>
    </Grid>
      <Grid item alignItems="flex-end">
        <Typography gutterBottom variant="body1" component="div">120</Typography>
        <Typography gutterBottom variant="body1" component="div">2 Seats</Typography>
      </Grid>
    </Grid>
    
    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">


      <div style={{paddingLeft:'30px',paddingTop:'10px'}}>
        <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }} color="primary" variant="dot">
          
        </Badge>
        <Typography style={{marginTop:'-15px',paddingLeft:'30px'}} variant="body2" gutterBottom>
            XYZ Street, Tambaram, Chennai, Tamilnadu
          </Typography>
      </div>

      <Divider style={{paddingLeft:'20px', width:'5px', paddingTop:'10px'}} orientation="vertical" variant='fullWidth' />

      <div style={{paddingLeft:'30px',paddingTop:'10px'}}>
        <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }} color="secondary" variant="dot">

          <Typography style={{paddingLeft:'30px'}} variant="body2"  gutterBottom>
            XYZ Street, Tambaram, Chennai, Tamilnadu
          </Typography>
        </Badge>
      </div>
    </Grid>
    <Grid style={{paddingLeft:'30px',paddingTop:'10px'}} container row justifyContent="space-between" alignItems="center">
      <Typography variant="body2" color="text.secondary">
        Tomorrow, 9 AM
      </Typography>
      <div>

        <Button>Edit </Button>
        <Button>Cancel </Button>
      </div>
    </Grid>


  </Grid>
</Paper>
);
}