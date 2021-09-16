import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
root: {
maxWidth: 400,
},
avatar: {
width: theme.spacing(7),
height: theme.spacing(7),
}
}));

export const RoomCard = () => {
const classes = useStyles();

return (
<Card className={classes.root}>
  <CardActionArea>
    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
      <CardContent>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">

        <Grid item xs={8}> <Typography variant="h4" component="h1">
            Room 101
          </Typography>
          </Grid> 
          <Grid item xs={4} alignItems="flex-end">
          <Typography color="textSecondary" variant="body2" component="p">
            5 minutes ago
          </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={3}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className={classes.avatar} />
        </Grid>
            <Grid items xs={9} container direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Typography variant="body2" color="textSecondary" component="p">
            Ram
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            send the details
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  </CardActionArea>

</Card>
);
}