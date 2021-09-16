import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
paper: {
padding: theme.spacing(2),
margin: 'auto',
maxWidth: 1000,
},
image: {
width: 200,
height: 200,
},
img: {
margin: 'auto',
display: 'block',
maxWidth: '100%',
maxHeight: '100%',
},
}));

export default function ClassifiedCard() {
const classes = useStyles();

return (
<div className={classes.root}>
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1628243426757-b092ba839ff9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              Amelio Early Education
            </Typography>
            <Typography variant="body1" gutterBottom>
              No 602/3 Elcot SEZ Sholinganallur Campus SDB Block 5, Medavakkam High Road, Sholinganallur, Chennai - 600119 </Typography>
            <Typography variant="body1">
              <PhoneIcon fontSize="small" /> +91 345-343-3422
            </Typography>
            <Typography variant="body1">
              abc@gmail.com
            </Typography>
          </Grid>
          <Grid container justifyContent="flex-end" alignItems="center">
            <Button variant="contained" color="primary">Details</Button>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  </Paper>
</div>
);
}