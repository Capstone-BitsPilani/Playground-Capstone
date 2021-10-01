import React from 'react';
import Box from '@material-ui/core/Box';
import './BillCards.css';
import { Grid, Link } from '@material-ui/core';




export default function BillCards() {
  return (
    <div style={{paddingTop:"200px"}} >
    <Grid  container
    direction="row"
    justifyContent="space-evenly"
    alignItems="flex-start" spacing={2}>
   
      <Box   className='billdue-inner' >
      <Box   className='billdue-outer'>
        <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center"  style={{width:"50px"}}
>
    <div className='card-heading'> Bill Due</div>
    <div className='card-amount' >5000</div>
    <a href="#" className='card-link' >Pay Now</a>
        </Grid>
      </Box>
      </Box>
      <Box   className='overdue-inner' >
      <Box   className='overdue-outer'>
        <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center"  style={{width:"50px"}}
>
    <div className='card-heading'> Over Due</div>
    <div className='card-amount' >5000</div>
    <a href="#" className='card-link' >Pay Now</a>
        </Grid>
      </Box>
      </Box>

      <Box   className='lastpayment-inner' >
      <Box   className='lastpayment-outer'>
        <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center"  style={{width:"50px"}}
>
    <div className='card-heading'> Last Payment</div>
    <div className='card-amount' >5000</div>
    <a href="#" className='card-link' >Pay Now</a>
        </Grid>
      </Box>
      </Box>
    </Grid>

    </div>
  );
}